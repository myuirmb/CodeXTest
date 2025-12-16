import { View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const logo = 'https://img12.360buyimg.com/imagetools/jfs/t1/181454/1/32008/2054/649026b6Fc40491f9/b7988bc4adc3f65a.png'

export default function Index() {
  const handleClick = () => {
    Taro.showToast({ title: '按钮点击事件', icon: 'success' })
  }

  return (
    <View className='index-page'>
      <View className='hero'>
        <Image src={logo} className='logo' mode='widthFix' />
        <Text className='title'>Taro 基础实例</Text>
        <Text className='subtitle'>使用 React 语法的多端统一开发起步模板</Text>
      </View>
      <View className='actions'>
        <Button type='primary' onClick={handleClick}>立即体验</Button>
        <Button openType='contact' className='secondary'>联系客服</Button>
      </View>
      <View className='section'>
        <Text className='section-title'>快速上手</Text>
        <Text className='section-desc'>修改本页面内容即可开始自定义自己的小程序与 H5 页面。</Text>
      </View>
    </View>
  )
}
