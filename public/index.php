<!DOCTYPE HTML>
<html lang="en">
<?php require('./views/templates/head.php'); ?>
<body>
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
                    <a href="#">
                        <h2 class="slide-up red">Web Development</h2>
                    </a>
                </div>
            </div>
            <div class="standard-width design floating-text">
                <div id="designers" class="overflow">
                    <a href="">
                        <h2 class="web-design slide-up red">Web Design</h2>
                    </a>
                </div>
            </div>
            <div class="standard-width seo floating-text">
                <div id="seo" class="overflow">
                    <a href="">
                        <h2 class="seo-expert slide-up red">SEO Expertise</h2>
                    </a>
                </div>
            </div>
            <div class="landing-image-container overflow">
                <img id="landingImage" src="./imgs/moon.jpg" alt="">
            </div>
        </div>
        <div class="standard-width">
            <h2 id="getInTouch" class="text-center contact slide-up">Get in Touch</h2>
            <div class="contact-form">
                <div id="contactName" onclick="landing.contactTransition('.contact-name-trans');" class="form-item-container slide-up">
                    <input onfocus="landing.contactTransition('.contact-name-trans');" name="hidden-name" type="text" class="standard-input" data=".contact-name-trans"/>
                    <p class="slide-left-on-click contact-name contact-name-trans">Name</p>
                </div>
                <div id="contactEmail" onclick="landing.contactTransition('.contact-email-trans');" class="form-item-container slide-up">
                    <input onfocus="landing.contactTransition('.contact-email-trans');" name="email" type="text" class="standard-input" data=".contact-email-trans"/>
                    <p class="slide-left-on-click contact-name contact-email-trans">Email</p>
                </div>
                <div id="contactMessage" class="form-item-container last-form-item full-border slide-up">
                    <textarea placeholder="Message" name="hidden-message" rows="8" class="standard-textarea"></textarea>
                </div>
                <div class="btn-container">
                    <button class="standard-btn red">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <?php require('./views/templates/footer.php'); ?>
</body>
</html>