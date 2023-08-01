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
				let pathX=/<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"><\/path>/gi;
				let pathT='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>';
				xel=document.getElementsByClassName("r-1p0dtai r-18jsvk2 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b");
				elx=document.getElementsByClassName("r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr");
				elxx=document.getElementsByClassName("r-k200y r-18jsvk2 r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr");
				elxxx=document.getElementsByClassName("r-jwli3a r-4qtqp9 r-yyyyoo r-labphf r-1777fci r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr");
				i=j=k=l=0;
				while(i<xel.length||j<elx.length||k<elxx.length||l<elxxx.length){
					eli=(typeof xel[i]!=="undefined")?xel[i]:null;
					elj=(typeof elx[j]!=="undefined")?elx[j]:null;
					elk=(typeof elxx[k]!=="undefined")?elxx[k]:null;
					ell=(typeof elxxx[l]!=="undefined")?elxxx[l]:null;
					if(eli!==null)
						xel[i].innerHTML=xel[i].innerHTML.replace(pathX,pathT);
					if(elj!==null)
						elx[j].innerHTML=elx[j].innerHTML.replace(pathX,pathT);
					if(elk!==null)
						elxx[k].innerHTML=elxx[k].innerHTML.replace(pathX,pathT);
					if(ell!==null)
						elxxx[l].innerHTML=elxxx[l].innerHTML.replace(pathX,pathT);
					i++,j++,k++,l++;
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
