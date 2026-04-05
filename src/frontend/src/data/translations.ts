export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.farm"
  | "nav.shop"
  | "nav.cattle"
  | "nav.equipment"
  | "nav.cropSuggestions"
  | "nav.schemes"
  | "nav.contact"
  | "nav.techniques"
  | "nav.logout"
  | "nav.cart"
  | "nav.language"
  | "hero.welcome"
  | "hero.subtitle"
  | "hero.explore"
  | "hero.getStarted"
  | "home.whyOrganic"
  | "home.whyOrganic.desc"
  | "home.cropSeason"
  | "home.schemeHighlights"
  | "home.futureFarming"
  | "home.contactCta"
  | "home.contactCta.desc"
  | "home.feature1"
  | "home.feature1.desc"
  | "home.feature2"
  | "home.feature2.desc"
  | "home.feature3"
  | "home.feature3.desc"
  | "home.feature4"
  | "home.feature4.desc"
  | "home.ai"
  | "home.ai.desc"
  | "home.drone"
  | "home.drone.desc"
  | "home.irrigation"
  | "home.irrigation.desc"
  | "about.hero"
  | "about.stats.farmers"
  | "about.stats.crops"
  | "about.stats.states"
  | "about.stats.products"
  | "about.mission"
  | "about.mission.text"
  | "about.vision"
  | "about.vision.text"
  | "about.techniques"
  | "about.team"
  | "about.futureScope"
  | "about.joinUs"
  | "about.joinUs.desc"
  | "farm.hero"
  | "farm.filter.all"
  | "farm.filter.cereals"
  | "farm.filter.vegetables"
  | "farm.filter.fruits"
  | "farm.filter.spices"
  | "farm.filter.pulses"
  | "farm.filter.oilseeds"
  | "farm.filter.cashCrops"
  | "farm.season"
  | "farm.soil"
  | "farm.water"
  | "farm.duration"
  | "farm.states"
  | "farm.fertilizer"
  | "farm.calendar"
  | "farm.expand"
  | "farm.collapse"
  | "shop.hero"
  | "shop.vegetables"
  | "shop.seeds"
  | "shop.fertilizers"
  | "shop.addCart"
  | "shop.wishlist"
  | "shop.buyNow"
  | "shop.price"
  | "shop.rating"
  | "cart.title"
  | "cart.empty"
  | "cart.checkout"
  | "cart.remove"
  | "cart.total"
  | "cart.qty"
  | "cart.close"
  | "checkout.title"
  | "checkout.name"
  | "checkout.phone"
  | "checkout.email"
  | "checkout.address"
  | "checkout.product"
  | "checkout.quantity"
  | "checkout.totalPrice"
  | "checkout.submit"
  | "checkout.success"
  | "checkout.error"
  | "checkout.required"
  | "checkout.invalidPhone"
  | "checkout.invalidEmail"
  | "cattle.hero"
  | "cattle.search"
  | "cattle.filter.all"
  | "cattle.filter.dairy"
  | "cattle.filter.draught"
  | "cattle.filter.poultry"
  | "cattle.filter.goat"
  | "cattle.filter.sheep"
  | "cattle.filter.pig"
  | "cattle.filter.aquaculture"
  | "cattle.breed"
  | "cattle.feed"
  | "cattle.health"
  | "cattle.benefits"
  | "equipment.hero"
  | "equipment.search"
  | "equipment.filter.all"
  | "equipment.filter.tillage"
  | "equipment.filter.seeding"
  | "equipment.filter.harvesting"
  | "equipment.filter.irrigation"
  | "equipment.filter.protection"
  | "equipment.filter.processing"
  | "equipment.specs"
  | "equipment.uses"
  | "equipment.tutorial"
  | "cropSuggestions.hero"
  | "cropSuggestions.selectState"
  | "cropSuggestions.placeholder"
  | "cropSuggestions.yield"
  | "cropSuggestions.marketPrice"
  | "cropSuggestions.soilType"
  | "schemes.hero"
  | "schemes.benefits"
  | "schemes.eligibility"
  | "schemes.applyNow"
  | "contact.hero"
  | "contact.name"
  | "contact.email"
  | "contact.subject"
  | "contact.message"
  | "contact.send"
  | "contact.faq"
  | "contact.officeHours"
  | "contact.quote"
  | "contact.success"
  | "contact.error"
  | "signup.title"
  | "signup.name"
  | "signup.mobile"
  | "signup.password"
  | "signup.confirmPassword"
  | "signup.sendOtp"
  | "signup.enterOtp"
  | "signup.verify"
  | "signup.submit"
  | "signup.otpSent"
  | "signup.otpError"
  | "signup.success"
  | "footer.tagline"
  | "footer.quickLinks"
  | "footer.contactInfo"
  | "footer.copyright"
  | "footer.social"
  | "footer.rights"
  | "voice.read"
  | "voice.stop"
  | "common.learnMore"
  | "common.viewAll"
  | "common.loading"
  | "common.error"
  | "common.close";

type Translations = Record<"en" | "hi" | "mr", Record<TranslationKey, string>>;

export const translations: Translations = {
  en: {
    "nav.home": "🏠 Home",
    "nav.about": "🌿 About",
    "nav.farm": "🌾 Farm",
    "nav.shop": "🛒 Shop",
    "nav.cattle": "🐄 Cattle",
    "nav.equipment": "🔧 Equipment",
    "nav.cropSuggestions": "📍 Crop Suggestions",
    "nav.schemes": "🏛️ Schemes",
    "nav.contact": "📞 Contact",
    "nav.techniques": "🌱 Techniques",
    "nav.logout": "Logout",
    "nav.cart": "Cart",
    "nav.language": "Language",
    "hero.welcome": "Welcome to Agro Crops",
    "hero.subtitle": "Empowering Farmers with Modern Organic Farming Solutions",
    "hero.explore": "Explore Crops",
    "hero.getStarted": "Get Started",
    "home.whyOrganic": "Why Choose Organic Farming?",
    "home.whyOrganic.desc":
      "Discover the benefits of sustainable organic farming practices",
    "home.cropSeason": "Crop of the Season",
    "home.schemeHighlights": "Government Scheme Highlights",
    "home.futureFarming": "Future of Farming",
    "home.contactCta": "Ready to Transform Your Farm?",
    "home.contactCta.desc": "Get expert guidance on organic farming techniques",
    "home.feature1": "Healthier Produce",
    "home.feature1.desc": "Chemical-free crops with superior nutritional value",
    "home.feature2": "Soil Health",
    "home.feature2.desc": "Preserve and improve soil fertility naturally",
    "home.feature3": "Eco Friendly",
    "home.feature3.desc": "Reduce carbon footprint and protect the environment",
    "home.feature4": "Higher Income",
    "home.feature4.desc": "Premium organic prices yield better farmer income",
    "home.ai": "AI-Powered Farming",
    "home.ai.desc":
      "Smart algorithms predict best crops and optimal growing conditions",
    "home.drone": "Drone Technology",
    "home.drone.desc":
      "Precision crop monitoring and pesticide-free spraying via drones",
    "home.irrigation": "Smart Irrigation",
    "home.irrigation.desc":
      "IoT-based water management systems for maximum efficiency",
    "about.hero": "About Agro Crops",
    "about.stats.farmers": "500+ Farmers",
    "about.stats.crops": "35+ Crops",
    "about.stats.states": "25+ States",
    "about.stats.products": "60+ Products",
    "about.mission": "Our Mission",
    "about.mission.text":
      "To empower Indian farmers with knowledge, technology, and resources for sustainable organic farming that benefits both the farmer and the environment.",
    "about.vision": "Our Vision",
    "about.vision.text":
      "A future where every Indian farmer thrives through organic practices, producing nutritious food while preserving our natural resources for generations to come.",
    "about.techniques": "Organic Farming Techniques",
    "about.team": "Meet Our Team",
    "about.futureScope": "Future Scope",
    "about.joinUs": "Join the Movement",
    "about.joinUs.desc":
      "Be part of India's organic farming revolution. Together we grow.",
    "farm.hero": "Farm Management",
    "farm.filter.all": "All",
    "farm.filter.cereals": "Cereals",
    "farm.filter.vegetables": "Vegetables",
    "farm.filter.fruits": "Fruits",
    "farm.filter.spices": "Spices",
    "farm.filter.pulses": "Pulses",
    "farm.filter.oilseeds": "Oilseeds",
    "farm.filter.cashCrops": "Cash Crops",
    "farm.season": "Season",
    "farm.soil": "Soil Type",
    "farm.water": "Water Requirement",
    "farm.duration": "Growth Duration",
    "farm.states": "Best States",
    "farm.fertilizer": "Fertilizer Tips",
    "farm.calendar": "Growing Calendar",
    "farm.expand": "View Details",
    "farm.collapse": "Hide Details",
    "shop.hero": "Organic Shop",
    "shop.vegetables": "Vegetables",
    "shop.seeds": "Seeds",
    "shop.fertilizers": "Fertilizers",
    "shop.addCart": "Add to Cart",
    "shop.wishlist": "Wishlist",
    "shop.buyNow": "Buy Now",
    "shop.price": "Price",
    "shop.rating": "Rating",
    "cart.title": "Your Cart",
    "cart.empty": "Your cart is empty",
    "cart.checkout": "Checkout",
    "cart.remove": "Remove",
    "cart.total": "Total",
    "cart.qty": "Qty",
    "cart.close": "Close",
    "checkout.title": "Place Your Order",
    "checkout.name": "Full Name",
    "checkout.phone": "Mobile Number",
    "checkout.email": "Email Address",
    "checkout.address": "Delivery Address",
    "checkout.product": "Product",
    "checkout.quantity": "Quantity",
    "checkout.totalPrice": "Total Price",
    "checkout.submit": "Place Order",
    "checkout.success": "Order placed successfully! 🎉",
    "checkout.error": "Failed to place order. Please try again.",
    "checkout.required": "This field is required",
    "checkout.invalidPhone": "Enter a valid 10-digit mobile number",
    "checkout.invalidEmail": "Enter a valid email address",
    "cattle.hero": "Cattle Management",
    "cattle.search": "Search animals...",
    "cattle.filter.all": "All",
    "cattle.filter.dairy": "Dairy",
    "cattle.filter.draught": "Draught",
    "cattle.filter.poultry": "Poultry",
    "cattle.filter.goat": "Goat",
    "cattle.filter.sheep": "Sheep",
    "cattle.filter.pig": "Pig",
    "cattle.filter.aquaculture": "Aquaculture",
    "cattle.breed": "Breed",
    "cattle.feed": "Feed Requirements",
    "cattle.health": "Health Tips",
    "cattle.benefits": "Benefits",
    "equipment.hero": "Farm Equipment",
    "equipment.search": "Search equipment...",
    "equipment.filter.all": "All",
    "equipment.filter.tillage": "Tillage",
    "equipment.filter.seeding": "Seeding",
    "equipment.filter.harvesting": "Harvesting",
    "equipment.filter.irrigation": "Irrigation",
    "equipment.filter.protection": "Protection",
    "equipment.filter.processing": "Processing",
    "equipment.specs": "Specifications",
    "equipment.uses": "Key Uses",
    "equipment.tutorial": "Watch Tutorial",
    "cropSuggestions.hero": "Crop Suggestions",
    "cropSuggestions.selectState": "Select Your State",
    "cropSuggestions.placeholder": "-- Select a State --",
    "cropSuggestions.yield": "Yield",
    "cropSuggestions.marketPrice": "Market Price",
    "cropSuggestions.soilType": "Soil Type",
    "schemes.hero": "Government Schemes",
    "schemes.benefits": "Benefits",
    "schemes.eligibility": "Eligibility",
    "schemes.applyNow": "Apply Now",
    "contact.hero": "Contact Us",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.faq": "Frequently Asked Questions",
    "contact.officeHours": "Office Hours",
    "contact.quote":
      '"The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale." — John F. Kennedy',
    "contact.success": "Message sent successfully!",
    "contact.error": "Failed to send message. Please try again.",
    "signup.title": "Create Account",
    "signup.name": "Full Name",
    "signup.mobile": "Mobile Number",
    "signup.password": "Password",
    "signup.confirmPassword": "Confirm Password",
    "signup.sendOtp": "Send OTP",
    "signup.enterOtp": "Enter OTP",
    "signup.verify": "Verify OTP",
    "signup.submit": "Create Account",
    "signup.otpSent": "OTP sent to your mobile number",
    "signup.otpError": "Invalid OTP. Please try 1234",
    "signup.success": "Account created successfully!",
    "footer.tagline": "Empowering Organic Farmers Across India",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.copyright": "© 2025 Agro Crops. All rights reserved.",
    "footer.social": "Follow Us",
    "footer.rights": "All Rights Reserved",
    "voice.read": "Read Aloud",
    "voice.stop": "Stop Reading",
    "common.learnMore": "Learn More",
    "common.viewAll": "View All",
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.close": "Close",
  },
  hi: {
    "nav.home": "🏠 होम",
    "nav.about": "🌿 हमारे बारे में",
    "nav.farm": "🌾 खेत",
    "nav.shop": "🛒 दुकान",
    "nav.cattle": "🐄 पशु",
    "nav.equipment": "🔧 उपकरण",
    "nav.cropSuggestions": "📍 फसल सुझाव",
    "nav.schemes": "🏛️ योजनाएं",
    "nav.contact": "📞 संपर्क",
    "nav.techniques": "🌱 तकनीकें",
    "nav.logout": "लॉगआउट",
    "nav.cart": "कार्ट",
    "nav.language": "भाषा",
    "hero.welcome": "एग्रो क्रॉप्स में आपका स्वागत है",
    "hero.subtitle": "आधुनिक जैविक खेती समाधानों से किसानों को सशक्त बनाना",
    "hero.explore": "फसलें देखें",
    "hero.getStarted": "शुरू करें",
    "home.whyOrganic": "जैविक खेती क्यों चुनें?",
    "home.whyOrganic.desc": "टिकाऊ जैविक खेती के फायदे जानें",
    "home.cropSeason": "सीज़न की फसल",
    "home.schemeHighlights": "सरकारी योजनाओं की झलक",
    "home.futureFarming": "खेती का भविष्य",
    "home.contactCta": "अपने खेत को बदलने के लिए तैयार हैं?",
    "home.contactCta.desc": "जैविक खेती तकनीकों पर विशेषज्ञ मार्गदर्शन प्राप्त करें",
    "home.feature1": "स्वस्थ उत्पाद",
    "home.feature1.desc": "रासायनिक-मुक्त फसलें, बेहतर पोषण",
    "home.feature2": "मिट्टी का स्वास्थ्य",
    "home.feature2.desc": "मिट्टी की उर्वरता को प्राकृतिक रूप से बनाए रखें",
    "home.feature3": "पर्यावरण अनुकूल",
    "home.feature3.desc": "कार्बन उत्सर्जन कम करें और पर्यावरण बचाएं",
    "home.feature4": "अधिक आय",
    "home.feature4.desc": "जैविक उत्पादों की प्रीमियम कीमत से बेहतर कमाई",
    "home.ai": "एआई आधारित खेती",
    "home.ai.desc": "स्मार्ट एल्गोरिदम बेहतर फसल और परिस्थितियां बताते हैं",
    "home.drone": "ड्रोन तकनीक",
    "home.drone.desc": "ड्रोन से सटीक फसल निगरानी और छिड़काव",
    "home.irrigation": "स्मार्ट सिंचाई",
    "home.irrigation.desc": "IoT आधारित जल प्रबंधन प्रणाली",
    "about.hero": "एग्रो क्रॉप्स के बारे में",
    "about.stats.farmers": "500+ किसान",
    "about.stats.crops": "35+ फसलें",
    "about.stats.states": "25+ राज्य",
    "about.stats.products": "60+ उत्पाद",
    "about.mission": "हमारा मिशन",
    "about.mission.text":
      "भारतीय किसानों को टिकाऊ जैविक खेती के लिए ज्ञान, तकनीक और संसाधन प्रदान करना।",
    "about.vision": "हमारी दृष्टि",
    "about.vision.text": "एक ऐसा भविष्य जहां हर भारतीय किसान जैविक खेती से समृद्ध हो।",
    "about.techniques": "जैविक खेती तकनीकें",
    "about.team": "हमारी टीम",
    "about.futureScope": "भविष्य की संभावनाएं",
    "about.joinUs": "आंदोलन में शामिल हों",
    "about.joinUs.desc": "भारत की जैविक खेती क्रांति का हिस्सा बनें।",
    "farm.hero": "खेत प्रबंधन",
    "farm.filter.all": "सभी",
    "farm.filter.cereals": "अनाज",
    "farm.filter.vegetables": "सब्जियां",
    "farm.filter.fruits": "फल",
    "farm.filter.spices": "मसाले",
    "farm.filter.pulses": "दालें",
    "farm.filter.oilseeds": "तिलहन",
    "farm.filter.cashCrops": "नकदी फसलें",
    "farm.season": "मौसम",
    "farm.soil": "मिट्टी का प्रकार",
    "farm.water": "पानी की आवश्यकता",
    "farm.duration": "विकास अवधि",
    "farm.states": "उपयुक्त राज्य",
    "farm.fertilizer": "उर्वरक सुझाव",
    "farm.calendar": "बुवाई कैलेंडर",
    "farm.expand": "विवरण देखें",
    "farm.collapse": "छुपाएं",
    "shop.hero": "जैविक दुकान",
    "shop.vegetables": "सब्जियां",
    "shop.seeds": "बीज",
    "shop.fertilizers": "उर्वरक",
    "shop.addCart": "कार्ट में जोड़ें",
    "shop.wishlist": "विशलिस्ट",
    "shop.buyNow": "अभी खरीदें",
    "shop.price": "कीमत",
    "shop.rating": "रेटिंग",
    "cart.title": "आपकी कार्ट",
    "cart.empty": "आपकी कार्ट खाली है",
    "cart.checkout": "चेकआउट",
    "cart.remove": "हटाएं",
    "cart.total": "कुल",
    "cart.qty": "मात्रा",
    "cart.close": "बंद करें",
    "checkout.title": "ऑर्डर दें",
    "checkout.name": "पूरा नाम",
    "checkout.phone": "मोबाइल नंबर",
    "checkout.email": "ईमेल पता",
    "checkout.address": "डिलीवरी पता",
    "checkout.product": "उत्पाद",
    "checkout.quantity": "मात्रा",
    "checkout.totalPrice": "कुल मूल्य",
    "checkout.submit": "ऑर्डर दें",
    "checkout.success": "ऑर्डर सफलतापूर्वक दिया गया! 🎉",
    "checkout.error": "ऑर्डर देने में विफल। पुनः प्रयास करें।",
    "checkout.required": "यह फ़ील्ड आवश्यक है",
    "checkout.invalidPhone": "10 अंकों का मोबाइल नंबर दर्ज करें",
    "checkout.invalidEmail": "वैध ईमेल पता दर्ज करें",
    "cattle.hero": "पशु प्रबंधन",
    "cattle.search": "जानवर खोजें...",
    "cattle.filter.all": "सभी",
    "cattle.filter.dairy": "डेयरी",
    "cattle.filter.draught": "भार वाहक",
    "cattle.filter.poultry": "पोल्ट्री",
    "cattle.filter.goat": "बकरी",
    "cattle.filter.sheep": "भेड़",
    "cattle.filter.pig": "सुअर",
    "cattle.filter.aquaculture": "मछलीपालन",
    "cattle.breed": "नस्ल",
    "cattle.feed": "चारा आवश्यकताएं",
    "cattle.health": "स्वास्थ्य सुझाव",
    "cattle.benefits": "लाभ",
    "equipment.hero": "कृषि उपकरण",
    "equipment.search": "उपकरण खोजें...",
    "equipment.filter.all": "सभी",
    "equipment.filter.tillage": "जुताई",
    "equipment.filter.seeding": "बुवाई",
    "equipment.filter.harvesting": "कटाई",
    "equipment.filter.irrigation": "सिंचाई",
    "equipment.filter.protection": "सुरक्षा",
    "equipment.filter.processing": "प्रसंस्करण",
    "equipment.specs": "विशिष्टताएं",
    "equipment.uses": "मुख्य उपयोग",
    "equipment.tutorial": "ट्यूटोरियल देखें",
    "cropSuggestions.hero": "फसल सुझाव",
    "cropSuggestions.selectState": "अपना राज्य चुनें",
    "cropSuggestions.placeholder": "-- राज्य चुनें --",
    "cropSuggestions.yield": "उत्पादन",
    "cropSuggestions.marketPrice": "बाजार मूल्य",
    "cropSuggestions.soilType": "मिट्टी का प्रकार",
    "schemes.hero": "सरकारी योजनाएं",
    "schemes.benefits": "लाभ",
    "schemes.eligibility": "पात्रता",
    "schemes.applyNow": "अभी आवेदन करें",
    "contact.hero": "संपर्क करें",
    "contact.name": "पूरा नाम",
    "contact.email": "ईमेल पता",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.send": "संदेश भेजें",
    "contact.faq": "अक्सर पूछे जाने वाले प्रश्न",
    "contact.officeHours": "कार्यालय समय",
    "contact.quote": '"किसान वो है जो सबको खिलाता है।"',
    "contact.success": "संदेश सफलतापूर्वक भेजा गया!",
    "contact.error": "संदेश भेजने में विफल।",
    "signup.title": "खाता बनाएं",
    "signup.name": "पूरा नाम",
    "signup.mobile": "मोबाइल नंबर",
    "signup.password": "पासवर्ड",
    "signup.confirmPassword": "पासवर्ड की पुष्टि करें",
    "signup.sendOtp": "OTP भेजें",
    "signup.enterOtp": "OTP दर्ज करें",
    "signup.verify": "OTP सत्यापित करें",
    "signup.submit": "खाता बनाएं",
    "signup.otpSent": "OTP आपके मोबाइल नंबर पर भेजा गया",
    "signup.otpError": "अमान्य OTP। कृपया 1234 आज़माएं",
    "signup.success": "खाता सफलतापूर्वक बनाया गया!",
    "footer.tagline": "पूरे भारत में जैविक किसानों को सशक्त बनाना",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.contactInfo": "संपर्क जानकारी",
    "footer.copyright": "© 2025 एग्रो क्रॉप्स। सर्वाधिकार सुरक्षित।",
    "footer.social": "हमें फॉलो करें",
    "footer.rights": "सर्वाधिकार सुरक्षित",
    "voice.read": "जोर से पढ़ें",
    "voice.stop": "रोकें",
    "common.learnMore": "और जानें",
    "common.viewAll": "सभी देखें",
    "common.loading": "लोड हो रहा है...",
    "common.error": "कुछ गलत हुआ",
    "common.close": "बंद करें",
  },
  mr: {
    "nav.home": "🏠 मुखपृष्ठ",
    "nav.about": "🌿 आमच्याबद्दल",
    "nav.farm": "🌾 शेत",
    "nav.shop": "🛒 दुकान",
    "nav.cattle": "🐄 जनावरे",
    "nav.equipment": "🔧 उपकरणे",
    "nav.cropSuggestions": "📍 पीक सूचना",
    "nav.schemes": "🏛️ योजना",
    "nav.contact": "📞 संपर्क",
    "nav.techniques": "🌱 तंत्रे",
    "nav.logout": "लॉगआउट",
    "nav.cart": "कार्ट",
    "nav.language": "भाषा",
    "hero.welcome": "एग्रो क्रॉप्समध्ये आपले स्वागत आहे",
    "hero.subtitle": "आधुनिक सेंद्रिय शेती समाधानांसह शेतकऱ्यांना सक्षम करणे",
    "hero.explore": "पिके पहा",
    "hero.getStarted": "सुरुवात करा",
    "home.whyOrganic": "सेंद्रिय शेती का निवडावी?",
    "home.whyOrganic.desc": "शाश्वत सेंद्रिय शेतीचे फायदे जाणून घ्या",
    "home.cropSeason": "हंगामातील पीक",
    "home.schemeHighlights": "सरकारी योजनांची झलक",
    "home.futureFarming": "शेतीचे भविष्य",
    "home.contactCta": "तुमचे शेत बदलण्यासाठी तयार आहात?",
    "home.contactCta.desc": "सेंद्रिय शेती तंत्रावर तज्ञ मार्गदर्शन मिळवा",
    "home.feature1": "आरोग्यदायी उत्पादन",
    "home.feature1.desc": "रसायनमुक्त पिके, उत्तम पोषण",
    "home.feature2": "मातीचे आरोग्य",
    "home.feature2.desc": "मातीची सुपीकता नैसर्गिकरित्या टिकवा",
    "home.feature3": "पर्यावरण अनुकूल",
    "home.feature3.desc": "कार्बन उत्सर्जन कमी करा, पर्यावरण वाचवा",
    "home.feature4": "अधिक उत्पन्न",
    "home.feature4.desc": "सेंद्रिय उत्पादनांच्या प्रीमियम किमतीतून चांगले उत्पन्न",
    "home.ai": "AI-आधारित शेती",
    "home.ai.desc": "स्मार्ट अल्गोरिदम सर्वोत्तम पिके सुचवतात",
    "home.drone": "ड्रोन तंत्रज्ञान",
    "home.drone.desc": "ड्रोनद्वारे अचूक पीक देखरेख आणि फवारणी",
    "home.irrigation": "स्मार्ट सिंचन",
    "home.irrigation.desc": "IoT-आधारित जल व्यवस्थापन प्रणाली",
    "about.hero": "एग्रो क्रॉप्सबद्दल",
    "about.stats.farmers": "500+ शेतकरी",
    "about.stats.crops": "35+ पिके",
    "about.stats.states": "25+ राज्ये",
    "about.stats.products": "60+ उत्पादने",
    "about.mission": "आमचे ध्येय",
    "about.mission.text":
      "भारतीय शेतकऱ्यांना शाश्वत सेंद्रिय शेतीसाठी ज्ञान, तंत्रज्ञान आणि संसाधने प्रदान करणे.",
    "about.vision": "आमची दृष्टी",
    "about.vision.text":
      "जिथे प्रत्येक भारतीय शेतकरी सेंद्रिय शेतीद्वारे समृद्ध होईल असे भविष्य.",
    "about.techniques": "सेंद्रिय शेती तंत्रे",
    "about.team": "आमची टीम",
    "about.futureScope": "भविष्यातील संधी",
    "about.joinUs": "चळवळीत सामील व्हा",
    "about.joinUs.desc": "भारताच्या सेंद्रिय शेती क्रांतीचा भाग व्हा.",
    "farm.hero": "शेत व्यवस्थापन",
    "farm.filter.all": "सर्व",
    "farm.filter.cereals": "धान्य",
    "farm.filter.vegetables": "भाजीपाला",
    "farm.filter.fruits": "फळे",
    "farm.filter.spices": "मसाले",
    "farm.filter.pulses": "कडधान्ये",
    "farm.filter.oilseeds": "तेलबिया",
    "farm.filter.cashCrops": "नगदी पिके",
    "farm.season": "हंगाम",
    "farm.soil": "मातीचा प्रकार",
    "farm.water": "पाण्याची गरज",
    "farm.duration": "वाढीचा कालावधी",
    "farm.states": "उत्तम राज्ये",
    "farm.fertilizer": "खत सूचना",
    "farm.calendar": "लागवड कॅलेंडर",
    "farm.expand": "तपशील पहा",
    "farm.collapse": "लपवा",
    "shop.hero": "सेंद्रिय दुकान",
    "shop.vegetables": "भाजीपाला",
    "shop.seeds": "बियाणे",
    "shop.fertilizers": "खते",
    "shop.addCart": "कार्टमध्ये जोडा",
    "shop.wishlist": "विशलिस्ट",
    "shop.buyNow": "आत्ता खरेदी करा",
    "shop.price": "किंमत",
    "shop.rating": "रेटिंग",
    "cart.title": "तुमची कार्ट",
    "cart.empty": "तुमची कार्ट रिकामी आहे",
    "cart.checkout": "चेकआउट",
    "cart.remove": "काढा",
    "cart.total": "एकूण",
    "cart.qty": "प्रमाण",
    "cart.close": "बंद करा",
    "checkout.title": "ऑर्डर द्या",
    "checkout.name": "पूर्ण नाव",
    "checkout.phone": "मोबाइल नंबर",
    "checkout.email": "ईमेल पत्ता",
    "checkout.address": "डिलिव्हरी पत्ता",
    "checkout.product": "उत्पादन",
    "checkout.quantity": "प्रमाण",
    "checkout.totalPrice": "एकूण किंमत",
    "checkout.submit": "ऑर्डर द्या",
    "checkout.success": "ऑर्डर यशस्वीरित्या दिला! 🎉",
    "checkout.error": "ऑर्डर देण्यात अयशस्वी. पुन्हा प्रयत्न करा.",
    "checkout.required": "हे फील्ड आवश्यक आहे",
    "checkout.invalidPhone": "10 अंकी मोबाइल नंबर टाका",
    "checkout.invalidEmail": "वैध ईमेल पत्ता टाका",
    "cattle.hero": "जनावरे व्यवस्थापन",
    "cattle.search": "जनावरे शोधा...",
    "cattle.filter.all": "सर्व",
    "cattle.filter.dairy": "दुग्धजन्य",
    "cattle.filter.draught": "भार वाहक",
    "cattle.filter.poultry": "कुक्कुटपालन",
    "cattle.filter.goat": "शेळी",
    "cattle.filter.sheep": "मेंढी",
    "cattle.filter.pig": "डुक्कर",
    "cattle.filter.aquaculture": "मत्स्यपालन",
    "cattle.breed": "जात",
    "cattle.feed": "चारा आवश्यकता",
    "cattle.health": "आरोग्य सूचना",
    "cattle.benefits": "फायदे",
    "equipment.hero": "शेती उपकरणे",
    "equipment.search": "उपकरणे शोधा...",
    "equipment.filter.all": "सर्व",
    "equipment.filter.tillage": "नांगरणी",
    "equipment.filter.seeding": "पेरणी",
    "equipment.filter.harvesting": "कापणी",
    "equipment.filter.irrigation": "सिंचन",
    "equipment.filter.protection": "संरक्षण",
    "equipment.filter.processing": "प्रक्रिया",
    "equipment.specs": "वैशिष्ट्ये",
    "equipment.uses": "मुख्य उपयोग",
    "equipment.tutorial": "ट्युटोरियल पहा",
    "cropSuggestions.hero": "पीक सूचना",
    "cropSuggestions.selectState": "तुमचे राज्य निवडा",
    "cropSuggestions.placeholder": "-- राज्य निवडा --",
    "cropSuggestions.yield": "उत्पन्न",
    "cropSuggestions.marketPrice": "बाजार भाव",
    "cropSuggestions.soilType": "मातीचा प्रकार",
    "schemes.hero": "सरकारी योजना",
    "schemes.benefits": "फायदे",
    "schemes.eligibility": "पात्रता",
    "schemes.applyNow": "आत्ता अर्ज करा",
    "contact.hero": "संपर्क साधा",
    "contact.name": "पूर्ण नाव",
    "contact.email": "ईमेल पत्ता",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.send": "संदेश पाठवा",
    "contact.faq": "वारंवार विचारले जाणारे प्रश्न",
    "contact.officeHours": "कार्यालय वेळ",
    "contact.quote": '"शेतकरी हा राष्ट्राचा कणा आहे."',
    "contact.success": "संदेश यशस्वीरित्या पाठवला!",
    "contact.error": "संदेश पाठवण्यात अयशस्वी.",
    "signup.title": "खाते तयार करा",
    "signup.name": "पूर्ण नाव",
    "signup.mobile": "मोबाइल नंबर",
    "signup.password": "पासवर्ड",
    "signup.confirmPassword": "पासवर्ड पुष्टी करा",
    "signup.sendOtp": "OTP पाठवा",
    "signup.enterOtp": "OTP टाका",
    "signup.verify": "OTP सत्यापित करा",
    "signup.submit": "खाते तयार करा",
    "signup.otpSent": "OTP तुमच्या मोबाइलवर पाठवला",
    "signup.otpError": "चुकीचा OTP. कृपया 1234 वापरा",
    "signup.success": "खाते यशस्वीरित्या तयार केले!",
    "footer.tagline": "संपूर्ण भारतातील सेंद्रिय शेतकऱ्यांना सक्षम करणे",
    "footer.quickLinks": "जलद दुवे",
    "footer.contactInfo": "संपर्क माहिती",
    "footer.copyright": "© 2025 एग्रो क्रॉप्स. सर्व हक्क राखीव.",
    "footer.social": "आम्हाला फॉलो करा",
    "footer.rights": "सर्व हक्क राखीव",
    "voice.read": "मोठ्याने वाचा",
    "voice.stop": "थांबवा",
    "common.learnMore": "अधिक जाणून घ्या",
    "common.viewAll": "सर्व पहा",
    "common.loading": "लोड होत आहे...",
    "common.error": "काहीतरी चुकले",
    "common.close": "बंद करा",
  },
};
