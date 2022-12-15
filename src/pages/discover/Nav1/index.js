/*
 * @Author: liuxin 1213736251@qq.com
 * @Date: 2022-12-07 22:31:21
 * @LastEditors: 刘鑫 1213736251@qq.com
 * @LastEditTime: 2022-12-15 16:35:54
 * @Description:
 * @FilePath: /lx-music-react/src/pages/discover/Nav1/index.js
 */
import React, { memo, useEffect, useState } from 'react'
import { Carousel } from 'antd'
import { Nav1Wrapper } from './style'
// import { StepBackwardOutlined } from '@ant-design/icons'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getBannerThunk } from './store/actions'

const Nav1 = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const banner = useSelector(state => state.discover.banner, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerThunk())
  }, [dispatch])

  const onChange = currentSlide => {
    setCurrentIndex(currentSlide)
  }

  return (
    <Nav1Wrapper>
      {/* <StepBackwardOutlined /> */}
      <Carousel afterChange={onChange} className="bannerBox" autoplay>
        {banner.map((ele, index) => {
          return (
            <div className="banner-item" key={index}>
              <img className="image" src={ele.imageUrl} alt="" />
            </div>
          )
        })}
      </Carousel>
      <h1> 图片数量：{banner.length}</h1>
      <h1> 当前下标：{currentIndex}</h1>
    </Nav1Wrapper>
  )
})

export default Nav1
