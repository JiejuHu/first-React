import React from "react"

class Welcome extends React.Component{
    render() {
        const isLogin = false
        return (
            <div>
                <h1>Welcome React</h1>
                { isLogin ? <p>已登录</p> : <p>未登录</p> }
            </div>
        )
    }
}

export default Welcome