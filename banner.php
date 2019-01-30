<div class="banner">
	<a class="control_next"></a>
	<a class="control_prev"></a>
	<ul class="banner__slides">
		<?php for ($x = 1; $x <= 3; $x++) { ?>
			<li class="banner__slides banner__slides<?php echo $x; ?>">
		      	<div class="banner__content">
			      	<h1 class="title">キャッチコピーが入ります。</h1>

			      	<div class="desc">
			      		<p>サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
						<p>サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
			      	</div>
		      	</div>
		   	</li>
		<?php } ?>
	</ul>  
	<div class="navigation">
		<div><a class="navigation__item"></a></div>
		<div><a class="navigation__item"></a></div>
		<div><a class="navigation__item"></a></div>
	</div>
</div>