import React, { useEffect } from 'react'

function TwoColumns(props) {

	useEffect(()=>{
		const options = {}
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting){
					const target = entry.target
					const previousSibling = target.previousSibling

					console.log('is intersecting:', entry.target.dataset.src)
					target.src = target.dataset.src
					previousSibling.srcset = previousSibling.dataset.srcset
					observer.unobserve(entry.target)
				}
			})
		}
		console.log(props.columns[0].props.children[1])
		const intersectionObserver = new IntersectionObserver(callback, options)
		intersectionObserver.observe(props.columns[0].props.children[1].ref.current)

		return () => intersectionObserver.disconnect()
	},[props.columns])
	
	return (
		<div className="TwoColumns py-16" style={{backgroundColor: props.bgColor}}>
			<div className={"flex flex-col sm:flex-row container mx-auto" + (props.mobileReverse ? " flex-col-reverse" : "")}>
				<div className="flex-1 sm:my-8 sm:ml-4 sm:mr-2 lg:ml-6 lg:mr-6 flex items-center">
					{props.columns[0]}
				</div>
				<div className="flex-1 sm:my-8 sm:mr-4 sm:ml-2 lg:mr-6 lg:ml-6 flex items-center">
					{props.columns[1]}
				</div>
			</div>
		</div>
	)
}

export default TwoColumns
