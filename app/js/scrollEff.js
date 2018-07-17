$(document).ready(function()
{
	var controller2 = new ScrollMagic.Controller();
	$('.ef-block').each(function(block)
	{
		let $block = $(this);
		$block.addClass(`block-${block}`);
		console.group(`block ${block}`)
		let tweenArray = [];
		$block.find('.ef-wrap').each(function(layer){
			let $layer = $(this);
			$layer.addClass(`block-${block}-layer-${layer}`)
			console.group(`block-${block}-layer-${layer}`)
			if($layer.find('.ef-target').length>0)
			 {
				let tween = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target`, 2,
						{ 
							opacity: 0,
							x: "-30%" ,
							
						},
						{
							opacity: 1,
							x: "0%",
							ease: Power4.easeOut
						}
					);
				tweenArray.push(tween)
			}
			if($layer.find('.ef-target-right').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-right`, 2,
					{ 
						x: "20%" ,
						opacity: 0
					},
					{
						opacity: 1,
						x: "0%",
						ease: Power4.easeOut
					}
				);

				tweenArray.push(tweenR);
			}
			if($layer.find('.ef-target-right-1').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-right-1`, 2,
					{ 
						x: "100%" ,
						opacity: 0
					},
					{
						opacity: 1,
						x: "0%",
						ease: Power4.easeOut,
						delay:.3
					}
				);

				tweenArray.push(tweenR);
			}

			if($layer.find('.ef-target-top').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-top`, 2,
					{ 
						y: "-10%" ,
						opacity: 0
					},
					{
						opacity: 1,
						y: "0%",
						ease: Power4.easeOut
					}
				);

				tweenArray.push(tweenR);
			}
			if($layer.find('.ef-target-bottom-box').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-bottom-box`, 2,
					{ 
						y: "30%" ,
						opacity: 0
					},
					{
						opacity: 1,
						y: "0%",
						ease: Power4.easeOut
					}
				);

				tweenArray.push(tweenR);
			}
			if($layer.find('.ef-target-bottom').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-bottom`, 2,
					{ 
						y: "50%" ,
						opacity: 0
					},
					{
						opacity: 1,
						y: "0%",
						ease: Power4.easeOut
					}
				);

				tweenArray.push(tweenR);
			}
			if($layer.find('.ef-target-bottom-1').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-bottom-1`, 2,
					{ 
						y: "50%" ,
						opacity: 0
					},
					{
						opacity: 1,
						y: "0%",
						ease: Power4.easeOut,
						delay:1.1
					}
				);

				tweenArray.push(tweenR);
			}
			if($layer.find('.ef-target-fadein').length > 0) {
				//$('.ef-target-fadein').each(function(index){
					//setTimeout(function(){
						let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-target-fadein`, 2,
					{ 
						y: "-10%" ,
						opacity: 0
					},
					{
						opacity: 1,
						y: "0%",
						ease: Power4.easeOut,
						delay:1
					}
				);

				tweenArray.push(tweenR);
				//},250*index)
				//})
				
			}
			if($layer.find('.ef-left-be').length > 0) {
				let tweenR = TweenMax.fromTo(`.block-${block}-layer-${layer} .ef-left-be`, 1,
					{ 
						x: "-100%" ,
						
					},
					{
						
						x: "0%",
						ease: Power4.easeOut
					}
				);

				tweenArray.push(tweenR);
			}
		});
		let timeline = new TimelineMax().add(tweenArray);
		new ScrollMagic.Scene({triggerElement: `.block-${block}`})
						. setTween(timeline)
						.addIndicators()
						.addTo(controller2);
	})
})