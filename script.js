gsap.config({
	autoSleep: 0,
});

const commonScrollTrigger = {
	scrub: 1,
};

gsap.matchMedia().add("(max-width: 768px)", () => {
	// Mobile animations
	gsap.fromTo(
		"#Gedung1",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.1, y: 400, x: -100, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo(
		"#Gedung2",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.1, y: 200, x: 100, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo(
		"#Kota1",
		{ scale: 1, y: 0 },
		{ scale: 1.1, y: 1000, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo(
		"#Kota2",
		{ scale: 1, y: 0 },
		{ scale: 1.1, y: 1000, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo("#Sun", { x: 0 }, { x: 500, scrollTrigger: commonScrollTrigger });

	gsap.fromTo(
		"#Title",
		{ scale: 1, y: 0 },
		{ scale: 4, y: -100, scrollTrigger: commonScrollTrigger },
	);
});

gsap.matchMedia().add("(min-width: 769px)", () => {
	// Desktop animations
	gsap.fromTo(
		"#Gedung1",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.3, y: 200, x: -50, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo(
		"#Gedung2",
		{ scale: 1, y: 0, x: 0 },
		{ scale: 1.2, y: 200, x: 50, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo(
		"#Kota1",
		{ scale: 1, y: 0 },
		{ scale: 1.2, y: 100, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo(
		"#Kota2",
		{ scale: 1, y: 0 },
		{ scale: 1.2, y: 200, scrollTrigger: commonScrollTrigger },
	);

	gsap.fromTo("#Sun", { x: 0 }, { x: 200, scrollTrigger: commonScrollTrigger });

	gsap.fromTo(
		"#Title",
		{ scale: 1, y: 0 },
		{ scale: 2, y: -200, scrollTrigger: commonScrollTrigger },
	);
});

AOS.init({disable: 'mobile'});

// Buy button functionality
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const scriptName = this.parentElement.querySelector('h3').textContent;
            const scriptPrice = this.parentElement.querySelector('.script-price span').textContent;
            
            alert(`You are about to purchase "${scriptName}" for ${scriptPrice} World Locks. Proceed to payment?`);
            // Here you would typically redirect to a payment page or show a payment modal
        });
    });
});
