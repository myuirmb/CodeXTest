import { useEffect } from 'react'
import { addInterceptor, showToast } from '@tarojs/taro'
import './app.scss'

function App(props) {
  useEffect(() => {
    addInterceptor('request', (chain) => chain.proceed(chain.requestParams))
    showToast({
      title: '欢迎使用 Taro 基础实例',
      icon: 'none',
      duration: 1500
    })
  }, [])

  return props.children
}

export default App
