import { connect } from 'react-redux'
import Content from '../Components/Content/content'
import { comment, getCommentList } from '../actions/contentAction'

//Map Redux state to component props
const mapStateToProps = state => {
  return { ...state.Counter }
}

// const mapStateToProps(state){
//   return{
//     value:state.count
//   }
// }

// //Map Redux actions to component props
// const MapDispatchToProps = dispatch =>{
//   return{
//     onIncreaseClick:()=>dispatch(increaseAction)
//   }
// }

//Connected Component
//提供connect方法,用于从UI组件生成容器组件

export default connect(
  mapStateToProps,
  {
    comment,
    getCommentList
  }
)(Content)
