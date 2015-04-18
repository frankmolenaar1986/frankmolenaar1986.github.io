---
title: KruxResidents
layout: default
layer: dark
permalink: /residents/
background: "/images/backgrounds/background-12.jpg"
---
<div class="row">
	<div class="col-md-10 col-md-offset-1">
		<div class="residents">
			{% for resident in site.posts reversed | sort:order %}
				<div class="resident">
					{% if resident.title != "index" and resident.image %}
						<h2 class="center"><span class="krux-bold">{{ resident.title }}</span> <span class="krux-light">{{ resident.profession }}</span></h2>
						<img data-lazy="{{ site.baseurl }}{{ resident.image }}" alt="{{ resident.title }}" class="artist-image img-responsive">
					{% else %}
						{{ resident.content }}			
					{% endif %}
					{% if resident.website %}
						<a href="http://{{resident.website}}"><h2 class="center">{{ resident.website }}</h2></a>
					{% endif %}
				</div>	
			{% endfor %}
		</div>
	</div>
</div>