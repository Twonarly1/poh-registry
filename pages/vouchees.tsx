import { useLazyQuery, useQuery } from '@apollo/client'
import { RefreshIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import Canvas from '../components/Canvas'

import { GET_ALL_SUBMISSIONS } from '../graphql/queries'

function vouchees() {
  let submissions: any = []
  let inc = 1000
  let id = 0
  let count = 0
  let limit = 18000
  const [data, setData] = useState<any>()
  let [query, { data: response }] = useLazyQuery(GET_ALL_SUBMISSIONS, {
    variables: { first: 1000, skip: 0 },
  })
  const { data: pohCounter } = useQuery(GET_ALL_SUBMISSIONS)
  const counter = pohCounter?.pohcounter
  const numbers = [
    Number(counter?.challengedRegistration),
    Number(counter?.challengedRemoval),
    Number(counter?.expired),
    Number(counter?.pendingRegistration),
    Number(counter?.pendingRemoval),
    Number(counter?.registered),
    Number(counter?.removed),
    Number(counter?.vouchingPhase),
  ]
  const total = numbers.reduce((total, number) => total + number, 0)
  const graphData = () => {
    while (count <= limit) {
      query()
      if (!response) {
        count = limit + 1
        return false
      }
      for (var i = 0; i < response.pohsubmissions.length; i++) {
        submissions.push(response.pohsubmissions[i])
      }
      // console.log('submissions', submissions)
      count += inc
      id =
        response.pohsubmissions[
          response.pohsubmissions.length - 1
        ].id.toString()
      // console.log('next i ', i)
      // console.log('next count ', count)
      submissions.sort((a: any, b: any) => a.submissionTime - b.submissionTime)
    }
    const nWithVouchees = submissions.filter(
      (submission: any) => submission.vouchees.length > 0
    )
    setData(nWithVouchees)
    // console.log(nWithVouchees.length)
    // console.log(response.pohcounter)
  }

  useEffect(() => {
    graphData()
  }, [])

  // console.log(data)

  const gt0 = data?.filter(
    (n: any) => n.vouchees.length > 0 && n.vouchees.length <= 1
  )
  const gt1 = data?.filter(
    (n: any) => n.vouchees.length > 1 && n.vouchees.length <= 2
  )
  const gt2 = data?.filter(
    (n: any) => n.vouchees.length > 2 && n.vouchees.length <= 3
  )
  const gt3 = data?.filter(
    (n: any) => n.vouchees.length > 3 && n.vouchees.length <= 4
  )
  const gt4 = data?.filter(
    (n: any) => n.vouchees.length > 4 && n.vouchees.length <= 5
  )
  const gt5 = data?.filter(
    (n: any) => n.vouchees.length > 5 && n.vouchees.length <= 6
  )
  const gt6 = data?.filter(
    (n: any) => n.vouchees.length > 6 && n.vouchees.length <= 7
  )
  const gt7 = data?.filter(
    (n: any) => n.vouchees.length > 7 && n.vouchees.length <= 8
  )

  const drawArt = (context: CanvasRenderingContext2D) => {
    context.fillStyle = 'blue'
    context.beginPath()
    context.arc(100, 75, 50, 0, 2 * Math.PI)
    context.stroke()
  }

  return (
    <div className="">
      <button onClick={() => graphData()}>
        <RefreshIcon className="h-12 w-12" />
      </button>

      <div className="flex">
        <p className="w-80">Total registrants</p>
        <p className="w-20"> {total}</p>
      </div>

      <div className="flex">
        <p className="w-80">Registrants with vouchees</p>
        <p className="w-20"> {data?.length}</p>{' '}
        <p className="w-20"> {((data?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 0</p>
        <p className="w-20"> {gt0?.length}</p>
        <p className="w-20">{((gt0?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 1</p>
        <p className="w-20"> {gt1?.length}</p>
        <p className="w-20">{((gt1?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 2</p>
        <p className="w-20"> {gt2?.length}</p>
        <p className="w-20">{((gt2?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 3</p>
        <p className="w-20"> {gt3?.length}</p>
        <p className="w-20">{((gt3?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 4</p>
        <p className="w-20"> {gt4?.length}</p>
        <p className="w-20">{((gt4?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 5</p>
        <p className="w-20"> {gt5?.length}</p>
        <p className="w-20">{((gt5?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 6</p>
        <p className="w-20"> {gt6?.length}</p>
        <p className="w-20">{((gt6?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      <div className="flex">
        <p className="w-80">Registrants with vouchees &gt; 7</p>
        <p className="w-20"> {gt7?.length}</p>
        <p className="w-20">{((gt7?.length / total) * 100).toFixed(2)}%</p>{' '}
      </div>
      {/* <Canvas draw={drawArt} width={400} height={400} /> */}
    </div>
  )
}

export default vouchees
