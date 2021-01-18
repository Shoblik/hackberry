<!DOCTYPE HTML>
<html lang="en">
<?php require('./views/templates/head.php'); ?>
<body>
    <div class="screen"></div>
    <div class="page-container">
        <?php require('./views/templates/nav.php'); ?>
        <div class="landing parallax">
            <div class="standard-width hackberry-blurb">
                <div id="hackberryText" class="overflow">
                    <h1 class="slide-up">Hackberry</h1>
                </div>
                <div id="hackberryTag" class="overflow hackberry-tag">
                    <h3 class="tag-line slide-up">Web Services | Done Differently</h3>
                </div>
            </div>
            <div class="standard-width dev floating-text">
                <div id="developers" class="overflow">
                    <h2 class="slide-up">Web Development</h2>
                </div>
            </div>
            <div class="standard-width design floating-text">
                <div id="designers" class="overflow">
                    <h2 class="web-design slide-up-center-y">Web Design</h2>
                </div>
            </div>
            <div class="standard-width seo floating-text">
                <div id="seo" class="overflow">
                    <h2 class="seo-expert slide-up-center-y">SEO Expertise</h2>
                </div>
            </div>
        </div>
    </div>
    <?php require('./views/templates/footer.php'); ?>
</body>
</html>