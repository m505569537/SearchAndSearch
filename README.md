##建立四个文件夹
	components文件夹用于存放UI组件(不使用redux API)，
	containers文件夹用于存放容器组件(使用redux API),
	redux文件夹用于存储管理文件，管理应用state,
	views文件夹用于存放路由组件
##下载依赖
	npm i --save react-router-dom
	npm i --save redux
	npm i --save react-redux
	npm i --save redux-thunk  (中间件，用于实现redux异步操作，redux本身是不支持异步的)

##开始实现：
	1.拆分组件

	2.静态页面

	3.初始化动态显示

	4.交互

##redux中的四个文件都是有存在价值的
	action-types : 行为类型
	actions: 返回一个action对象，表明将要做出什么样的行为，同时还传入数据
	reducers: 将行动变为现实，输入旧的state，返回一个新的state
	store：存储state

##react与redux之间的交互包括两个方面：
###不使用react-redux插件时：
	1.更新页面(redux -> react)：加设监听，每当store中存储的state发生改变，就重新渲染页面，更新内容
			`store.subscribe(
				ReactDOM.render(<App store={store} />, document.getElementById('root'))
			)`
		因为store作为App组件的传入属性,所以可以通过this.props.store.getState()来获取状态

	2.更新状态(react -> redux)：当react中想要改变状态时，会触发dispatch方法派遣行为(action),
			action会自动被reducer调用，reducer返回的新状态被存储到store中，而subscribe会监听到store
			的变化，从而出发页面更新
			this.props.store.dispatch(action)
			action是行为函数，根据传入的数据，返回一个行为对象，包含行为类型和数据

###使用react-redux插件时：
	1.更新页面(redux -> react): 
			使用Provider标签包裹组件
			`import {Provider} from 'react-redux'
			ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>, document.getElementById('root'))

			//新建container文件
			import {connect} from 'react-redux'
			import App from 'app.jsx'

			const mapStateToProps = (state) => {
				return {
					data: state
				}
			} 

			const mapDispatchToProps = (dispatch) => {
				return {
					onAddClick: (data) => {
						dispatch(action)
					}
				}
			}

			connect(
				mapStateToProps,
				mapDispatchToProps   // 将派遣行为这一步骤封装成函数onAddClick再传给组件
		      //	{action}  也可以直接将action传给组件然后在组件里面再进行this.props.action操作
			)(App)`
			将data, onClick传入到App的props中，直接用{data, onAddClick} = this.props就行了

	2.更新状态
			react中会触发事件来改变状态，实质就是派遣action，比如：
			`<input type="text" ref={input => this.input = input} />
			<button onClick={this.add}>Add</button>`
			触发这个点击事件，让组建调用add函数
			add = () => {
				const count = this.input.value;
				onAddClick(count)
				//或者
				this.props.action(count)  //不需要dispatch
			}`
			将count值传给action，这个action的type已经在创建onAddClick函数时设定好了，
			一次来实现功能
			总而言之，react中各种函数的出发目的就是给action传值