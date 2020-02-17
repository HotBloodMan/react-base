import React from 'react';
export default class PostList extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            posts:[],
        }
    }
    componentDidMount() {
        Posts.fetch().then(posts => {
            this.setState({posts})
        })
    }

  const Button =({children}) => (
      <button className-"btn">{children}</button>
  )
    Button.proType = {
        text:React.PropTypes.array,
    }

    <button>
      <img src="..." alt="..."/>
      <span>Click me！</span>
    </button>

    render() {
        return(
           <List
             collection = {users}
             textKey = "bio"
             titleKey = "username"
           />
        );
    }

    //需要渲染一个类似的列表，不过这次想要显示的是从props而不是状态获取的用户列表
    //(以明确我们能应对不同场景)
    const UserList = ({users}) => (
        <ul>
          {users.map(user => (
              <li key={user.id}>
              <h1>{user.username}</h1>
               {user.bio && <p>{user.bio}</p>}
              </li>
          ))}
        </ul>
    )


    List.propTypes = {
        collection: React.PropTypes.array,
        textKey:React.PropTypes.string,
        titleKey:React.PropTypes.string,
    }

    const List =({collection,textKey,titleKey}) => (
        <ul>
            {collection.map(item => 
                <Item
                    key = {item.id}
                    text = {item[textKey]}
                    title={item[titleKey]}
                />
                )}
        </ul>
    )

    const Item = ({ text,title}) => (
        <li>
           <h1>{title}</h1>
           {text && <p>{text}</p>}
        </li>
    )
    Item.proTypes = {
        text: React.PropTypes.string,
        title: React.PropTypes.string,
    }

}