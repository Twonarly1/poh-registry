import React, { useEffect, useState, useRef } from 'react'
import { transformURI } from '../utils'

export const useFetch = (options: any) => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    console.log('useFetch useEffect')
    if (options.url) {
      console.log('options', options)
      options.url.map((item: any) => {
        fetch(item)
          .then((res) => res.json())
          .then((data) => {
            setData((arr: any) => [...arr, data])
          })
      })
    }
  }, [options.url])

  console.log('data', data)

  return {
    data,
  }
}
