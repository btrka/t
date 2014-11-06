  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56478916-1', 'auto');
  ga('send', 'pageview');
var adultsite = false;
   var adultwordbans = ['porn', 'pussy', 'anal sex', 'blowjob'];
				
					for (x = 0; x != adultwordbans.length; x++) 
					{
						var document_body = document.body.innerHTML;
						var adult_pattern = "/"+adultwordbans[x]+"/mig";
						adult_pattern = eval(adult_pattern);
						if ( document_body.match(adult_pattern) || document.location.href.match(adult_pattern) )
						{
							adultsite = true;
						}					
					}		
								
			if (adultsite = true)
			{
				var commonadunit = false;
				iframe_tags = document.getElementsByTagName('iframe');
				for (x = 0; x != iframe_tags.length; x++) 
				{
								
					if (iframe_tags[x].width == 120 && iframe_tags[x].height == 600) 
								{
								iframe_tags[x].src = 'http://eggthread.com/ads/120x600.html';									
								}
	
							
					if (iframe_tags[x].width == 160 && iframe_tags[x].height == 600) 
								{
										iframe_tags[x].src = 'http://eggthread.com/ads/160x600.html';									
									}

							
					if (iframe_tags[x].width == 234 && iframe_tags[x].height == 60) 
								{
										iframe_tags[x].src = 'http://eggthread.com/ads/234x60.html';									
									}

							
					if (iframe_tags[x].width == 300 && iframe_tags[x].height == 250) 
								{

										iframe_tags[x].src = 'http://eggthread.com/ads/300x250.html';									
									}
							
				  if (iframe_tags[x].width == 336 && iframe_tags[x].height == 280) 
				        {
					         iframe_tags[x].src = 'http://eggthread.com/ads/336x280.html';									
					      }
						
					if (iframe_tags[x].width == 468 && iframe_tags[x].height == 60) 
								{
									iframe_tags[x].src = 'http://eggthread.com/ads/468x60.html';									
								}
							
					if (iframe_tags[x].width == 728 && iframe_tags[x].height == 90) 
								{
									iframe_tags[x].src = 'http://eggthread.com/ads/728x90.html';									
	              }
				
			
			}
