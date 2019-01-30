<div class="main-content__left">
	<div class="article">
		<?php for ($x = 1; $x <= 10; $x++) { ?>
			<div class="article__item">
				<a href="sample-page.php">
					<div class="article__item-image">
						<div class="article__image-main">
							<img src="images/article-image.jpg" alt="Article Image">
						</div>
						<div class="article__image-hover">
							<img src="images/article-image-hover.jpg" alt="Article Image">
						</div>
					</div><!-- article__item-image -->
					<div class="article__item-content">
						<span class="article__date">
							2016.01.01
						</span>
						<h3 class="article__title">
							サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
						</h3>
						<div class="article__desc">
							サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…
						</div>
					</div><!-- article__item-content -->
				</a>
			</div><!-- article__item -->
		<?php } ?>
	</div><!-- article -->
	<div class="more-btn">
		<a href="sample-page.php">More</a>
	</div>
</div><!-- main-content__left -->