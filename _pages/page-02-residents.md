---
title: residents
layout: default
background: "/images/IMG_8785.jpg"
---
{% assign cutoffathalf = site.categories.residents | size | divided_by:2 | plus:1 %}	
<div class="row">	
	<div class="col-lg-6 col-md-12">
		<ul>				
			{% for post in site.posts limit:cutoffathalf %}
				<li>
					<a href="{{post.url}}">{{ post.title }} <span class="list-subtitle">{{ post.profession }}</span></a>
				</li>
			{% endfor %}
		</ul>
	</div>
	<div class="col-lg-6 col-md-12">	
		<ul>
			{% for post in site.posts offset:cutoffathalf %}
				<li>
					<a href="{{post.url}}">{{ post.title }} <span class="list-subtitle">{{ post.profession }}</span></a>
				</li>
			{% endfor %}
		</ul>
	</div>
</div>