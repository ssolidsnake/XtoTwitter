const XtoT=(function(){
	function titleXToT(){
		setInterval(function(){
			let currentTitle=document.title;
			let newTitle=document.title.replace(/x/gi,"Twitter");
			document.title=newTitle;
		},100);
	}
	function iconXToT(){
		setInterval(function(){
			var el = document.querySelector("link[rel*='icon']") || document.createElement('link');
			el.type = 'image/x-icon';
			el.rel = 'shortcut icon';
			el.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUdofIcofIboPIvqfNOtfVCsPQmpfMho/I5rfR3x/fU7f3y+v7s9/7A5ftcu/ZyxPdDsfTJ6Pxmv/aAyvj4/P/////j8/2x3/vd8f254vtXufWS0vmHzfjH6Pye1/m84/vqScICAAAA0UlEQVR4Ad1SBRLDIBAMS3oQd5f+/5WNJ8hMH5AdZw24c94KBjD7FA/N3Q/BFAl58cLzgzCKZZJC9cssPyysKKsVYd18mCpwg9CjVQLZVjvKLBGqIA2rsusJ6MtTMJCawKhbD4NojItTUEtoL+NefRhPvmo5UwVI26DSENHFKRUqBhj/lPoaX8Yw/zfPVMFE5m/DK9WAHNaEaFYUs7DHBRHfF/1yK0AwSsfrlxtpF/RzFl5fVBAcC8IdpjoMwrYrJOz+FQDJ1E25AP5s2grnnVgAzvMS38k5hv0AAAAASUVORK5CYII=';
			document.getElementsByTagName('head')[0].appendChild(el);
		},100);
	}
	function pathXToT(){
		if(typeof document.body==='object'){
			try{
				let pathX=/(<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"><\/path>|<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"><\/path>)/gi;
				let pathT='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>';
				let pathT2='<path fill="currentColor" d="M1231.051 118.453q-51.422 76.487-126.173 130.403q.738 14.46.738 32.687q0 101.273-29.53 202.791q-29.53 101.519-90.215 194.343q-60.685 92.824-144.574 164.468q-83.889 71.644-201.677 114.25q-117.788 42.606-252.474 42.606q-210.2 0-387.147-113.493q31.406 3.495 60.242 3.495q175.605 0 313.687-108.177q-81.877-1.501-146.654-50.409q-64.777-48.907-89.156-124.988q24.097 4.59 47.566 4.59q33.782 0 66.482-8.812q-87.378-17.5-144.975-87.04q-57.595-69.539-57.595-160.523v-3.126q53.633 29.696 114.416 31.592q-51.762-34.508-82.079-89.999q-30.319-55.491-30.319-120.102q0-68.143 34.151-126.908q95.022 116.607 230.278 186.392q135.258 69.786 290.212 77.514q-6.609-27.543-6.621-57.485q0-104.546 73.994-178.534Q747.623 0 852.169 0q109.456 0 184.392 79.711q85.618-16.959 160.333-61.349q-28.785 90.59-110.933 139.768q75.502-8.972 145.088-39.677z"/>';
				xel=document.getElementsByClassName("r-1p0dtai r-18jsvk2 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b");
				elx=document.getElementsByClassName("r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr");
				elxx=document.getElementsByClassName("r-k200y r-18jsvk2 r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr");
				elxxx=document.getElementsByClassName("r-jwli3a r-4qtqp9 r-yyyyoo r-labphf r-1777fci r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr");
				elxxxx=document.getElementsByClassName("u01b__icon-home");
				elxxxxx=document.getElementsByClassName("r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp");
				i=j=k=l=m=n=0;
				while(i<xel.length||j<elx.length||k<elxx.length||l<elxxx.length||m<elxxxx.length||n<elxxxxx.length){
					eli=(typeof xel[i]!=="undefined")?xel[i]:null;
					elj=(typeof elx[j]!=="undefined")?elx[j]:null;
					elk=(typeof elxx[k]!=="undefined")?elxx[k]:null;
					ell=(typeof elxxx[l]!=="undefined")?elxxx[l]:null;
					elm=(typeof elxxxx[m]!=="undefined")?elxxxx[m]:null;
					eln=(typeof elxxxxx[n]!=="undefined")?elxxxxx[n]:null;
					if(eli!==null)
						xel[i].innerHTML=xel[i].innerHTML.replace(pathX,pathT);
					if(elj!==null)
						elx[j].innerHTML=elx[j].innerHTML.replace(pathX,pathT);
					if(elk!==null)
						elxx[k].innerHTML=elxx[k].innerHTML.replace(pathX,pathT);
					if(ell!==null)
						elxxx[l].innerHTML=elxxx[l].innerHTML.replace(pathX,pathT);
					if(elm!==null)
						elxxxx[m].innerHTML=elxxxx[m].innerHTML.replace(pathX,pathT2);
					if(eln!==null)
						elxxxxx[n].innerHTML=elxxxxx[n].innerHTML.replace(pathX,pathT);
					i++,j++,k++,l++,m++,n++;
				}
				setTimeout(function(){
					pathXToT();
				},10);
			}catch(e){
				setTimeout(function(){
					pathXToT();
				},10);
			}
		}
	}
	function run(){
		iconXToT();
		titleXToT();
		pathXToT();
	}
	return{
		run:run
	}
})();
XtoT.run();
