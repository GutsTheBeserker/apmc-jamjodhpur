/**
 * APMC Marketing Yard Jamjodhpur - Premium Business JavaScript
 * Dynamic Translation, Live Rates Dashboard, E-NAM Calculators, and Form Validation
 */

// --- Global Crop Rates Mock Database (Gujarati APMC context) ---
const cropData = [
    {
        id: "groundnut",
        category: "oilseeds",
        nameEn: "Groundnut (Bold)",
        nameGu: "મગફળી (બોલ્ડ)",
        arrival: 2450,
        minPrice: 5800,
        maxPrice: 7250,
        modalPrice: 6500,
        trend: "up", // up, down, stable
        icon: "🥜"
    },
    {
        id: "cotton",
        category: "fibers",
        nameEn: "Cotton (Kapas)",
        nameGu: "કપાસ (શંકર)",
        arrival: 3200,
        minPrice: 6500,
        maxPrice: 8200,
        modalPrice: 7400,
        trend: "up",
        icon: "🌾"
    },
    {
        id: "sesame_white",
        category: "oilseeds",
        nameEn: "Sesame (White)",
        nameGu: "તલ (સફેદ)",
        arrival: 480,
        minPrice: 11000,
        maxPrice: 13500,
        modalPrice: 12200,
        trend: "stable",
        icon: "🌱"
    },
    {
        id: "sesame_black",
        category: "oilseeds",
        nameEn: "Sesame (Black)",
        nameGu: "તલ (કાળા)",
        arrival: 150,
        minPrice: 14000,
        maxPrice: 17500,
        modalPrice: 15800,
        trend: "up",
        icon: "🌱"
    },
    {
        id: "cumin",
        category: "spices",
        nameEn: "Cumin Seeds (Jeera)",
        nameGu: "જીરૂ",
        arrival: 850,
        minPrice: 22000,
        maxPrice: 28500,
        modalPrice: 25000,
        trend: "down",
        icon: "🌶️"
    },
    {
        id: "wheat",
        category: "cereals",
        nameEn: "Wheat (Lokwan)",
        nameGu: "ઘઉં (લોકવન)",
        arrival: 1800,
        minPrice: 2400,
        maxPrice: 3100,
        modalPrice: 2750,
        trend: "stable",
        icon: "🌾"
    },
    {
        id: "castor",
        category: "oilseeds",
        nameEn: "Castor Seeds",
        nameGu: "દિવેલા",
        arrival: 920,
        minPrice: 5600,
        maxPrice: 6200,
        modalPrice: 5900,
        trend: "down",
        icon: "🌿"
    },
    {
        id: "mustard",
        category: "oilseeds",
        nameEn: "Mustard Seeds (Rai)",
        nameGu: "રાઈ",
        arrival: 310,
        minPrice: 4800,
        maxPrice: 5400,
        modalPrice: 5100,
        trend: "up",
        icon: "🍂"
    },
    {
        id: "coriander",
        category: "spices",
        nameEn: "Coriander Seeds (Dhaniya)",
        nameGu: "ધાણા",
        arrival: 400,
        minPrice: 6000,
        maxPrice: 8500,
        modalPrice: 7200,
        trend: "up",
        icon: "🌿"
    },
    {
        id: "gram",
        category: "pulses",
        nameEn: "Gram (Chana)",
        nameGu: "ચણા",
        arrival: 1100,
        minPrice: 4900,
        maxPrice: 5700,
        modalPrice: 5300,
        trend: "stable",
        icon: "🧆"
    }
];

// --- Bilingual Translation Dictionary ---
const translations = {
    en: {
        // Top Bar & Navbar
        top_announcement: "📌 Groundnut and Cotton auctions start daily at 8:00 AM. Digital Gate Pass mandatory for all farm vehicles.",
        nav_rates: "Market Rates",
        nav_categories: "Crops",
        nav_helpdesk: "Farmer Helpdesk",
        nav_traders: "Trader Portal",
        nav_about: "About Us",
        nav_contact: "Contact",
        nav_action_rates: "Rates View",
        nav_live_portal: "🔴 Live Market Portal",
        lbl_quick_filters: "Quick Filters:",
        
        // Hero Section
        hero_live_badge: "🔴 Live APMC Price Feeds Active",
        hero_title_1: "Gujarat's Leading",
        hero_title_2: "Agricultural Marketplace",
        hero_desc: "Marketing Yard Jamjodhpur connects over 15,000 farmers with certified nationwide buyers via ultra-modern auction structures and fully automated e-NAM services.",
        hero_btn_rates: "Today's Market Rates",
        hero_btn_trader: "Register as Trader",
        hero_stat_farmers: "Active Farmers",
        hero_stat_traders: "Verified Traders",
        hero_stat_arrivals: "Daily Arrivals (Tons)",
        hero_float_1_title: "Top Crop Arrivals",
        hero_float_1_desc: "Groundnut leading today",
        hero_float_2_title: "Fast Auctions",
        hero_float_2_desc: "Avg. checkout < 30 mins",
        
        // Rates Section
        rates_tag: "Live Terminal",
        rates_title: "Daily Auction Commodity Rates",
        rates_desc: "Real-time rates directly compiled from the APMC auction floors. Price metrics listed are in Indian Rupees (INR) per Quintal (100 kg).",
        tab_all: "All Crops",
        tab_oilseeds: "Oilseeds",
        tab_cereals: "Cereals",
        tab_spices: "Spices",
        tab_pulses: "Pulses",
        search_placeholder: "Search crops (e.g. Groundnut...)",
        
        table_crop: "Crop Name",
        table_arrival: "Arrival (Quintal)",
        table_min: "Min. Price (₹/Q)",
        table_max: "Max. Price (₹/Q)",
        table_modal: "Modal Price (₹/Q)",
        table_trend: "Market Trend",
        trend_up: "Upward",
        trend_down: "Downward",
        trend_stable: "Stable",
        
        // Calculator Card
        calc_title: "Farmer's Income Estimator",
        calc_desc: "Input your crop quantity to estimate your total market earnings based on today's APMC modal rates instantly. Empowering digital accounting.",
        lbl_select_crop: "Select Your Crop",
        lbl_weight_unit: "Weight Measurement Unit",
        lbl_quantity: "Total Quantity",
        unit_quintal: "Quintal (100 kg)",
        unit_man: "Man (20 kg)",
        calc_result_lbl: "Estimated Net Valuation",
        calc_disclaimer: "*Estimated before standard APMC handling charges & commissions. Final payouts are calculated at auction terminals.",
        
        // Crop Categories
        cat_tag: "Our Produce",
        cat_title: "Major Crop Cultivations in Jamjodhpur",
        cat_desc: "Our fertile agricultural zone is highly renowned for supreme quality cash crops and premium spices distributed globally.",
        cat_oil_title: "Premium Oilseeds",
        cat_oil_desc: "Groundnut (Magfali) and Sesame (Til) cultivations represent the peak economic engine of the Jamjodhpur agrarian block.",
        cat_fiber_title: "High-grade Fibers",
        cat_fiber_desc: "Gujarat's legendary long-staple Shankar cotton varieties, processed locally in modern ginning mills.",
        cat_spice_title: "Aromatic Spices",
        cat_spice_desc: "World-famous bold Cumin (Jeera) and Coriander seeds cultivated under perfect semi-arid climatic balances.",
        cat_cereal_title: "Staple Grains & Pulses",
        cat_cereal_desc: "Rich Lokwan Wheat and protein-dense Gram crops serving domestic consumer distributions with premium yield rates.",

        // Farmer Helpdesk
        farm_tag: "Support & Facilities",
        farm_title: "APMC Farmer Services & Facilities",
        farm_desc: "Designed to provide seamless logistical coordination, soil diagnostics, financial transparency, and welfare.",
        srv_gatepass_title: "Digital Gate Pass",
        srv_gatepass_desc: "Generate your farm vehicle gate entry codes online. Minimizes arrival delays and queues at APMC entrance.",
        srv_soil_title: "Soil Testing Labs",
        srv_soil_desc: "State-of-the-art soil chemical testing. Get instant micro-nutrient recommendation reports to boost crop health.",
        srv_cold_title: "Cold Storage Bookings",
        srv_cold_desc: "Temperature-controlled storage facilities for delicate crops to prevent post-harvest spoilage and allow storage.",
        srv_adv_title: "Weather & Agronomy Advisories",
        srv_adv_desc: "Weekly bulletins compiled by local agronomy experts alongside direct meteorological department warnings.",
        srv_payment_title: "Instant e-NAM Payouts",
        srv_payment_desc: "100% transparent direct bank transfers integrated within the national agricultural market platform within 24 hours.",
        srv_canteen_title: "Kisan Bhojanalaya",
        srv_canteen_desc: "Highly subsidized, clean, and nutritious Gujarati meals for farmers staying overnight at the APMC yards.",

        // Trader Portal
        trader_tag: "Commercial Gateway",
        trader_title: "Trader Registrations & Operations",
        trader_desc: "Become a verified buyer at Jamjodhpur APMC. Gain secure electronic bidding access to supreme agricultural yield.",
        req_1_title: "Valid GST & PAN credentials",
        req_1_desc: "Mandatory corporate tax filings and government identifier codes.",
        req_2_title: "E-NAM National Account registration",
        req_2_desc: "Unified license allowing inter-state online bidding permissions.",
        req_3_title: "Refundable Security Deposit",
        req_3_desc: "Ensures financial integrity and standard operational compliance on bids.",
        form_title: "Trader Bidding Application",
        form_desc: "Submit your details below to initiate verified vendor registration.",
        form_name: "Applicant Full Name",
        form_firm: "Firm/Company Name",
        form_phone: "Contact Mobile Number",
        form_gst: "GSTIN or APMC License Code",
        form_interest: "Primary Crop Interests",
        form_agree: "I agree to comply with APMC Jamjodhpur auction guidelines and legal by-laws.",
        form_btn: "Submit Application",
        
        // Auction Schedule
        auction_tag: "Live Schedules",
        auction_title: "APMC Daily Auction Schedules",
        auction_desc: "Organized shed allocations designed to optimize transaction flow, buyer distribution, and loading efficiency.",
        time_8: "08:00 AM - 11:30 AM",
        time_12: "12:00 PM - 03:00 PM",
        time_3: "03:30 PM - 06:00 PM",
        shed_1_title: "Main Groundnut Yard (Shed A)",
        shed_1_desc: "Simultaneous open-outcry and electronic bidding.",
        shed_2_title: "Cotton & Sesame Yard (Shed B & C)",
        shed_2_desc: "Bulk loading logistics, heavy vehicle access platforms.",
        shed_3_title: "Spices & Pulses Arena (Shed D)",
        shed_3_desc: "Grading checks and high-precision electronic weighing.",
        active_shed_title: "Today's Auction Overview",
        active_shed_desc: "High transaction efficiency and real-time electronic ledger entries.",
        stat_shed_status: "Operational Status",
        val_active: "Fully Active",
        stat_buyers: "Registered Buyers Present",
        stat_volume: "Projected Trading Volume",
        val_volume: "₹2.4+ Crore Est.",
        
        // About Section
        about_tag: "Organizational Integrity",
        about_title: "APMC Jamjodhpur: Legacy of Agrarian Growth",
        about_desc: "Established as a pillar of regional trade, Marketing Yard Jamjodhpur has pioneered state-of-the-art infrastructure in the Saurashtra region. We bridge localized agricultural excellence with national distribution models, ensuring absolute financial fairness and prosperity for our farming communities.",
        feat_1_title: "ISO 9001 Certified",
        feat_1_desc: "Internationally standardized trade protocols.",
        feat_2_title: "100% Digital Auditing",
        feat_2_desc: "Complete transparency with computerized ledger balance reports.",
        feat_3_title: "High Capacity Infrastructure",
        feat_3_desc: "12 heavy-duty weighing terminals, 5 massive storage sheds.",
        feat_4_title: "Expert Committee Board",
        feat_4_desc: "Governed by veteran agricultural economists and local farmer representatives.",
        about_exp_badge: "Years of Trust",
        video_tour_lbl: "Watch APMC Facilities Drone Tour",
        
        // Testimonials
        test_tag: "Voices of Success",
        test_title: "Farmer & Trader Testimonials",
        test_desc: "Hear directly from the community members who power our daily trade achievements.",
        test_1_user: "Ramanbhai Patel",
        test_1_role: "Groundnut Farmer (Jamjodhpur)",
        test_1_text: "\"I have been selling my groundnut crop at Jamjodhpur APMC for 8 years. The dynamic e-NAM bidding fetched me 20% higher rates than localized village brokers. Payout is credited directly to my bank in 12 hours!\"",
        test_2_user: "Amit Shah",
        test_2_role: "Director, Shah Agri Exports (Ahmedabad)",
        test_2_text: "\"The infrastructure at Jamjodhpur Yard is world-class. Automated weighing guarantees accuracy, and the online gate-pass system eliminates truck bottlenecks during peak harvest seasons. Incredibly professional team!\"",
        
        // FAQ
        faq_tag: "Knowledge Base",
        faq_title: "Frequently Asked Questions",
        faq_desc: "Quick answers to help you navigate APMC guidelines, schedules, bidding protocols, and support programs.",
        faq_q1: "What documents do farmers need to sell crops at APMC Jamjodhpur?",
        faq_a1: "Farmers need to carry their Aadhaar card, 7/12 Land Registry documents (ખેતી પત્રક), bank passbook copy for instant e-transfer, and the Digital Gate Pass generated online or at the entrance kiosk.",
        faq_q2: "How does the e-NAM bidding system work?",
        faq_a2: "Once the crop arrives, a sample is graded for quality parameters. The grading details are uploaded to the national e-NAM portal. Verified traders from all over India view these details and submit bids electronically. The farmer has the right to accept or reject the highest electronic bid.",
        faq_q3: "Are there storage facilities available for crops?",
        faq_a3: "Yes, we have high-capacity warehouses and cold storage units. Farmers can secure their crops at extremely nominal subsidized rates to avoid distressed sales during price drops, allowing them to sell when rates improve.",
        faq_q4: "How can inter-state traders participate in auctions?",
        faq_a4: "Inter-state traders must register on the unified e-NAM portal, possess a valid GST registration, and submit a security deposit to get trading clearances for Jamjodhpur APMC auctions.",
        
        // Contact
        contact_tag: "Get In Touch",
        contact_title: "Connect with APMC Helpdesk",
        contact_desc: "Reach out to our dedicated administrative board, soil test bookings, or auction managers directly.",
        lbl_office: "Administrative Office Address",
        val_address: "Station Road, Jamjodhpur, District Jamnagar, Gujarat - 360530, India.",
        lbl_helpline: "Farmer Support Hotline",
        val_hotline: "+91 2898 220045 / +91 94282 22045",
        lbl_email: "Official Communications Email",
        val_email: "info@apmcjamjodhpur.org",
        c_form_title: "Send Official Inquiry",
        c_form_desc: "Fill in the details and our administrative officers will respond within 24 hours.",
        lbl_c_name: "Your Full Name",
        lbl_c_email: "Email Address / Mobile",
        lbl_c_sub: "Subject of Inquiry",
        lbl_c_msg: "Message Details",
        btn_send_inq: "Send Secure Message",
        
        // Footer
        footer_desc_txt: "Empowering Gujarat's agricultural framework through modern facilities, absolute trading transparency, and sustainable development paradigms.",
        foot_links_title: "Quick Navigation",
        foot_servs_title: "Farmer Portals",
        foot_news_title: "Newsletter",
        foot_news_desc: "Subscribe to daily modal price notifications sent directly to your email inbox.",
        lbl_placeholder_email: "Enter Email Address",
        foot_rights: "© 2026 Marketing Yard APMC Jamjodhpur. All commercial rights reserved.",
        foot_legal_1: "Privacy Policy",
        foot_legal_2: "Terms of Use",
        foot_legal_3: "e-NAM Guidelines",
        
        // Success Modal Text
        modal_success_title: "Registration Submitted!",
        modal_success_desc: "Thank you. Your trader application has been securely logged in our APMC database system. Our licensing committee will review your GSTIN credentials and email verification status within 24-48 business hours.",
        modal_btn_close: "Dismiss Window"
    },
    gu: {
        // Top Bar & Navbar
        top_announcement: "📌 મગફળી અને કપાસની હરાજી દરરોજ સવારે ૮:૦૦ વાગ્યે શરૂ થશે. તમામ વાહનો માટે ડિજિટલ ગેટ પાસ ફરજિયાત છે.",
        nav_rates: "બજાર ભાવો",
        nav_categories: "પાકોની માહિતી",
        nav_helpdesk: "ખેડૂત સહાય",
        nav_traders: "વેપારી પોર્ટલ",
        nav_about: "અમારા વિશે",
        nav_contact: "સંપર્ક",
        nav_action_rates: "ભાવ પત્રક",
        nav_live_portal: "🔴 લાઈવ માર્કેટ પોર્ટલ",
        lbl_quick_filters: "ખાસ શોધ:",
        
        // Hero Section
        hero_live_badge: "🔴 લાઈવ એ.પી.એમ.સી. બજાર ભાવો સક્રિય",
        hero_title_1: "ગુજરાતનું અગ્રણી",
        hero_title_2: "કૃષિ બજાર (એ.પી.એમ.સી.)",
        hero_desc: "માર્કેટિંગ યાર્ડ જામજોધપુર અત્યાધુનિક હરાજી શેડ અને સંપૂર્ણ ઓટોમેટેડ ઈ-નામ (e-NAM) સેવાઓ દ્વારા ૧૫,૦૦૦થી વધુ ખેડૂતોને દેશભરના પ્રમાણિત ખરીદદારો સાથે જોડે છે.",
        hero_btn_rates: "આજના બજાર ભાવો",
        hero_btn_trader: "વેપારી તરીકે નોંધણી કરો",
        hero_stat_farmers: "સક્રિય ખેડૂતો",
        hero_stat_traders: "પ્રમાણિત વેપારીઓ",
        hero_stat_arrivals: "દૈનિક આવક (ટન)",
        hero_float_1_title: "મહત્તમ આવક",
        hero_float_1_desc: "મગફળીની આવક મોખરે છે",
        hero_float_2_title: "ઝડપી હરાજી",
        hero_float_2_desc: "સરેરાશ સમય < ૩૦ મિનિટ",
        
        // Rates Section
        rates_tag: "લાઈવ ટર્મિનલ",
        rates_title: "દૈનિક હરાજીના કૃષિ ભાવો",
        rates_desc: "હરાજીના મેદાનમાંથી સીધા જ એકત્રિત કરેલા આજના લાઈવ ભાવો. ભાવો ભારતીય રૂપિયામાં (INR) પ્રતિ ક્વિન્ટલ (૧૦૦ કિલોગ્રામ) ના આપેલ છે.",
        tab_all: "તમામ પાકો",
        tab_oilseeds: "તેલીબિયાં",
        tab_cereals: "અનાજ",
        tab_spices: "મસાલા",
        tab_pulses: "કઠોળ",
        search_placeholder: "પાકનું નામ શોધો (દા.ત. મગફળી...)",
        
        table_crop: "પાકનું નામ",
        table_arrival: "આવક (ક્વિન્ટલ)",
        table_min: "ન્યૂનતમ ભાવ (₹/Q)",
        table_max: "મહત્તમ ભાવ (₹/Q)",
        table_modal: "સરેરાશ ભાવ (₹/Q)",
        table_trend: "બજાર વલણ",
        trend_up: "તેજી (વધારો)",
        trend_down: "મંદી (ઘટાડો)",
        trend_stable: "સ્થિર",
        
        // Calculator Card
        calc_title: "ખેડૂત આવક ગણક (કેલ્ક્યુલેટર)",
        calc_desc: "આજના બજાર ભાવ મુજબ તમારી અંદાજિત આવક મેળવવા માટે તમારા પાકની વિગત અને વજન દાખલ કરો. ડિજિટલ હિસાબ દ્વારા સશક્તિકરણ.",
        lbl_select_crop: "પાક પસંદ કરો",
        lbl_weight_unit: "વજનનું માપદંડ",
        lbl_quantity: "કુલ વજન",
        unit_quintal: "ક્વિન્ટલ (૧૦૦ કિલો)",
        unit_man: "મણ (૨૦ કિલો)",
        calc_result_lbl: "અંદાજિત કુલ વળતર (આવક)",
        calc_disclaimer: "*આ ગણતરી સામાન્ય હેન્ડલિંગ ચાર્જ અને કમિશન પહેલાંની અંદાજિત છે. અંતિમ ચુકવણી હરાજી ટર્મિનલ પર નક્કી થશે.",
        
        // Crop Categories
        cat_tag: "આપણી ઉપજ",
        cat_title: "જામજોધપુર પંથકના મુખ્ય કૃષિ પાકો",
        cat_desc: "આપણો ફળદ્રુપ વિસ્તાર ગુણવત્તાયુક્ત રોકડિયા પાકો અને ઉત્તમ મસાલાના ઉત્પાદન માટે સમગ્ર દેશમાં જાણીતો છે.",
        cat_oil_title: "ઉત્કૃષ્ટ તેલીબિયાં",
        cat_oil_desc: "જામજોધપુર તાલુકાના અર્થતંત્રની કરોડરજ્જુ સમાન મગફળી અને તલની ખેતી મુખ્ય છે.",
        cat_fiber_title: "શ્રેષ્ઠ કપાસ",
        cat_fiber_desc: "સ્થાનિક જીનીંગ મીલોમાં પ્રોસેસ થતો ગુજરાતનો પ્રખ્યાત લાંબા તારવાળો શંકર કપાસ.",
        cat_spice_title: "સુગંધિત મસાલા",
        cat_spice_desc: "અનુકૂળ આબોહવા વચ્ચે પકવવામાં આવતું વિશ્વ-પ્રસિદ્ધ બોલ્ડ જીરૂ અને ધાણા.",
        cat_cereal_title: "અનાજ અને કઠોળ",
        cat_cereal_desc: "સ્થાનિક વપરાશ અને વિતરણ માટે પૌષ્ટિક લોકવન ઘઉં અને પ્રોટીનથી ભરપૂર ચણાનું વાવેતર.",

        // Farmer Helpdesk
        farm_tag: "ખેડૂત સુવિધા અને સહાયતા",
        farm_title: "ખેડૂતો માટે વિશેષ સેવાઓ અને વ્યવસ્થા",
        farm_desc: "ખેડૂતોને સરળ પરિવહન, જમીન ચકાસણી, નાણાકીય પારદર્શિતા અને રહેવા-જમવાની સગવડ પૂરી પાડવા માટે કટિબદ્ધ.",
        srv_gatepass_title: "ડિજિટલ ગેટ પાસ",
        srv_gatepass_desc: "વાહનોની લાંબી લાઈનોથી બચવા માટે ઓનલાઈન ગેટ પાસ જનરેટ કરો, જેથી યાર્ડમાં ઝડપી પ્રવેશ મળી શકે.",
        srv_soil_title: "જમીન પરીક્ષણ લેબોરેટરી",
        srv_soil_desc: "જમીનની ચકાસણી કરી સૂક્ષ્મ પોષકતત્વોની ભલામણ સાથેનો વિગતવાર રિપોર્ટ મેળવી પાકની ગુણવત્તા વધારો.",
        srv_cold_title: "કોલ્ડ સ્ટોરેજ બુકિંગ",
        srv_cold_desc: "નાશવંત પાકોના સંગ્રહ માટે અત્યાધુનિક રેફ્રિજરેશન યુનિટ, જેથી યોગ્ય સમયે સારો ભાવ મેળવી શકાય.",
        srv_adv_title: "હવામાન અને કૃષિ સલાહ",
        srv_adv_desc: "સ્થાનિક કૃષિ નિષ્ણાતો દ્વારા હવામાનની આગાહી અને વાવણી/પાક સંરક્ષણ અંગેની અઠવાડિક માર્ગદર્શિકા.",
        srv_payment_title: "ઈ-નામ (e-NAM) સીધી ચુકવણી",
        srv_payment_desc: "કોઈપણ વચેટિયા વિના હરાજી પૂર્ણ થતાં જ ૨૪ કલાકમાં ૧૦૦% પારદર્શક રીતે સીધા ખેડૂતના ખાતામાં નાણાં જમા.",
        srv_canteen_title: "કિસાન ભોજનાલય",
        srv_canteen_desc: "રાત્રિ રોકાણ કરતા ખેડૂતો માટે સસ્તા દરે શુદ્ધ, પૌષ્ટિક અને ગરમા-ગરમ ગુજરાતી થાળીની સુવિધા.",

        // Trader Portal
        trader_tag: "વેપારી પ્રવેશદ્વાર",
        trader_title: "વેપારી નોંધણી અને વહીવટ",
        trader_desc: "જામજોધપુર એ.પી.એમ.સી.માં પ્રમાણિત ખરીદદાર બનો. ગુણવત્તાયુક્ત ખેત પેદાશોની ઓનલાઈન બોલી લગાવવાની સુવિધા મેળવો.",
        req_1_title: "માન્ય જી.એસ.ટી. અને પાન કાર્ડ",
        req_1_desc: "સરકારી ધારાધોરણો મુજબ વ્યવસાયી વેરા અને ટેક્સ રિટર્નની વિગતો.",
        req_2_title: "ઈ-નામ (e-NAM) રાષ્ટ્રીય ખાતું",
        req_2_desc: "સમગ્ર દેશના ખેડૂતો પાસેથી સીધી ખરીદી કરવા માટેનું રાષ્ટ્રીય લાઇસન્સ.",
        req_3_title: "પરત મળવાપાત્ર ડિપોઝિટ",
        req_3_desc: "વ્યવસાયિક વિશ્વસનીયતા અને હરાજીના વ્યવહારોની ચૂકવણી સુનિશ્ચિત કરવા માટેની રકમ.",
        form_title: "વેપારી નોંધણી અરજી પત્રક",
        form_desc: "વેપાર લાયસન્સ મેળવવા માટે તમારી વિગતો સબમિટ કરો.",
        form_name: "અરજદારનું પૂરું નામ",
        form_firm: "પેઢી / કંપનીનું નામ",
        form_phone: "સંપર્ક મોબાઈલ નંબર",
        form_gst: "GSTIN અથવા એ.પી.એમ.સી. લાયસન્સ નંબર",
        form_interest: "મુખ્ય ખરીદી રસ (પાક)",
        form_agree: "હું એ.પી.એમ.સી. જામજોધપુર હરાજીના તમામ નિયમો અને કાયદાઓનું પાલન કરવા સંમત છું.",
        form_btn: "અરજી સબમિટ કરો",
        
        // Auction Schedule
        auction_tag: "હરાજી સમયપત્રક",
        auction_title: "દૈનિક હરાજીના શેડ્યુલ",
        auction_desc: "યાર્ડમાં પાકોની સરળ આવક અને વેપારીઓની સગવડ માટે સમયસર વિભાજિત શેડની વ્યવસ્થા.",
        time_8: "સવારે ૦૮:૦૦ થી ૧૧:૩૦",
        time_12: "બપોરે ૧૨:૦૦ થી ૦૩:૦૦",
        time_3: "બપોરે ૦૩:૩૦ થી સાંજે ૦૬:૦૦",
        shed_1_title: "મુખ્ય મગફળી યાર્ડ (શેડ-એ)",
        shed_1_desc: "ખુલ્લી બોલી તેમજ કોમ્પ્યુટર દ્વારા ઓનલાઈન હરાજી પ્રક્રિયા.",
        shed_2_title: "કપાસ અને તલ યાર્ડ (શેડ-બી અને સી)",
        shed_2_desc: "ભારે માલવાહક વાહનોના પરિવહન અને લોડિંગ માટે અનુકૂળ જગ્યા.",
        shed_3_title: "મસાલા અને કઠોળ પરિસર (શેડ-ડી)",
        shed_3_desc: "ગ્રેડિંગ ચકાસણી અને કોમ્પ્યુટરાઈઝડ વજન કાંટાની સુવિધા.",
        active_shed_title: "આજની હરાજીની સ્થિતિ",
        active_shed_desc: "ડિજિટલ ઓડિટિંગ સાથે પારદર્શક અને ત્વરિત હરાજી પ્રક્રિયા ચાલુ છે.",
        stat_shed_status: "કાર્યરત સ્થિતિ",
        val_active: "સંપૂર્ણ સક્રિય",
        stat_buyers: "હાજર પ્રમાણિત વેપારીઓ",
        stat_volume: "અંદાજિત વેપારનું કદ",
        val_volume: "અંદાજે ₹૨.૪+ કરોડ",
        
        // About Section
        about_tag: "આપણી સંસ્થા",
        about_title: "એ.પી.એમ.સી. જામજોધપુર: સમૃદ્ધિની વિકાસયાત્રા",
        about_desc: "સૌરાષ્ટ્ર પંથકમાં કૃષિ વેપારના એક મજબૂત સ્તંભ તરીકે સ્થાપિત, માર્કેટિંગ યાર્ડ જામજોધપુરે હરાજી અને ખેડૂત કલ્યાણ ક્ષેત્રે અપ્રતિમ માળખાકીય સુવિધાઓ ઊભી કરી છે. અમારો ધ્યેય સ્થાનિક ગુણવત્તાયુક્ત ઉપજને રાષ્ટ્રીય સ્તરે ઉચ્ચ ભાવો અપાવવા સાથે ખેડૂતોને આર્થિક ન્યાય અપાવવાનો છે.",
        feat_1_title: "ISO 9001 પ્રમાણિત",
        feat_1_desc: "આંતરરાષ્ટ્રીય ગુણવત્તાના વ્યાપાર ધોરણો.",
        feat_2_title: "૧૦૦% ડિજિટલ ઓડિટિંગ",
        feat_2_desc: "રૂપિયાની લેવડ-દેવડ અને વજનમાં ૧૦૦% કોમ્પ્યુટરાઈઝડ પારદર્શિતા.",
        feat_3_title: "વિશાળ ક્ષમતાવાળું માળખું",
        feat_3_desc: "૧૨ અત્યાધુનિક વજન કાંટા અને ૫ વિશાળ હરાજી શેડ.",
        feat_4_title: "તજજ્ઞોનું બોર્ડ સમિતિ",
        feat_4_desc: "અનુભવી અર્થશાસ્ત્રીઓ અને પ્રગતિશીલ ખેડૂત પ્રતિનિધિઓનું બોર્ડ.",
        about_exp_badge: "વર્ષોનો વિશ્વાસ",
        video_tour_lbl: "એ.પી.એમ.સી. સુવિધા ડ્રોન પ્રવાસ જુઓ",
        
        // Testimonials
        test_tag: "સફળતાના સાક્ષી",
        test_title: "ખેડૂતો અને વેપારીઓના અનુભવો",
        test_desc: "માર્કેટ યાર્ડ સાથે જોડાયેલા સભ્યોના સાચા અને પ્રેરણાદાયક અનુભવો.",
        test_1_user: "રમણભાઈ પટેલ",
        test_1_role: "મગફળી પકવતા ખેડૂત (જામજોધપુર)",
        test_1_text: "\"હું છેલ્લા ૮ વર્ષથી મારી મગફળી જામજોધપુર યાર્ડમાં જ વેચું છું. ઈ-નામ ઓનલાઈન હરાજીના લીધે મને સ્થાનિક ગામના વેપારીઓ કરતા ૨૦% વધુ ભાવ મળ્યો છે. અને પૈસા પણ ૧૨ કલાકમાં સીધા બેંક ખાતામાં આવી જાય છે!\"",
        test_2_user: "અમિત શાહ",
        test_2_role: "ડિરેક્ટર, શાહ એગ્રી એક્સપોર્ટસ (અમદાવાદ)",
        test_2_text: "\"જામજોધપુર માર્કેટિંગ યાર્ડનું ઇન્ફ્રાસ્ટ્રક્ચર અદભુત છે. ઓટોમેટેડ વજન કાંટા સચોટતા આપે છે, અને ઓનલાઈન ગેટ-પાસ પદ્ધતિથી વાહનોની ટ્રાફિક સમસ્યા નથી થતી. ખૂબ જ સારો અને વ્યાવસાયિક સ્ટાફ!\"",
        
        // FAQ
        faq_tag: "મદદરૂપ પ્રશ્નોત્તરી",
        faq_title: "વારંવાર પૂછાતા પ્રશ્નો (FAQ)",
        faq_desc: "એ.પી.એમ.સી.ના નિયમો, હરાજી પદ્ધતિ અને ખેડૂત સહાય વિષે મૂંઝવતા પ્રશ્નોના જવાબો.",
        faq_q1: "ખેડૂતોએ પાક વેચવા માટે કયા દસ્તાવેજો લાવવા જરૂરી છે?",
        faq_a1: "ખેડૂતોએ તેમનું આધાર કાર્ડ, જમીનના ૭/૧૨ અને ૮-અ ના ઉતારા (ખેતી પત્રક), બેંક ખાતાની પાસબુક (ઓનલાઈન પેમેન્ટ માટે) અને ઓનલાઈન મેળવેલ ડિજિટલ ગેટ પાસ સાથે લાવવાનો રહેશે.",
        faq_q2: "ઈ-નામ (e-NAM) હરાજી સિસ્ટમ કેવી રીતે કામ કરે છે?",
        faq_a2: "પાક યાર્ડમાં આવ્યા પછી, લેબોરેટરીમાં ગુણવત્તાનું પરીક્ષણ થાય છે. આ રિપોર્ટ નેશનલ પોર્ટલ પર અપલોડ કરાય છે, જેથી આખા દેશના વેપારીઓ તેને જોઈને ઓનલાઈન હરાજીમાં બોલી લગાવે છે. સૌથી ઊંચી બોલી ખેડૂતની મંજૂરી બાદ જ મંજૂર થાય છે.",
        faq_q3: "શું પાક સંગ્રહ કરવા માટે કોઈ ગોડાઉન સુવિધા છે?",
        faq_a3: "હા, એ.પી.એમ.સી. પાસે વિશાળ સંગ્રહ ક્ષમતાવાળા ગોડાઉનો અને કોલ્ડ સ્ટોરેજ છે. ખેડૂતો ખૂબ જ નજીવા સબસિડી ભાડા પર પોતાનો માલ સંગ્રહી શકે છે અને જ્યારે બજારમાં સારો ભાવ આવે ત્યારે વેચી શકે છે.",
        faq_q4: "બીજા રાજ્યના વેપારીઓ હરાજીમાં ભાગ કેવી રીતે લઈ શકે?",
        faq_a4: "અન્ય રાજ્યોના વેપારીઓ પાસે માન્ય જી.એસ.ટી. નંબર અને ઈ-નામ (e-NAM) રાષ્ટ્રીય પોર્ટલ પર વેપાર લાયસન્સ હોવું જોઈએ. જામજોધપુર યાર્ડમાં બોલી લગાવવા માટે નિયત ડિપોઝિટ જમા કરાવવાની રહેશે.",
        
        // Contact
        contact_tag: "સંપર્ક કરો",
        contact_title: "એ.પી.એમ.સી. હેલ્પડેસ્ક સાથે જોડાઓ",
        contact_desc: "અમારા વહીવટી બોર્ડ, ભૂમિ પરીક્ષણ કેન્દ્ર કે હરાજી અધિકારીઓનો સીધો સંપર્ક સાધો.",
        lbl_office: "વહીવટી કચેરીનું સરનામું",
        val_address: "સ્ટેશન રોડ, જામજોધપુર, જિલ્લો જામનગર, ગુજરાત - ૩૬૦૫૩૦, ભારત.",
        lbl_helpline: "ખેડૂત સહાયતા હેલ્પલાઇન નંબર",
        val_hotline: "+૯૧ ૨૮૯૮ ૨૨૦૦૪૫ / +૯૧ ૯૪૨૮૨ ૨૨૦૪૫",
        lbl_email: "સત્તાવાર ઇમેઇલ આઈડી",
        val_email: "info@apmcjamjodhpur.org",
        c_form_title: "સત્તાવાર પૂછપરછ મોકલો",
        c_form_desc: "આપની વિગત ભરો, અમારા વહીવટી અધિકારીઓ ૨૪ કલાકમાં આપનો સંપર્ક કરશે.",
        lbl_c_name: "આપનું પૂરું નામ",
        lbl_c_email: "ઇમેઇલ એડ્રેસ / મોબાઈલ",
        lbl_c_sub: "પૂછપરછનો વિષય",
        lbl_c_msg: "સંદેશાની વિગત",
        btn_send_inq: "સુરક્ષિત સંદેશો મોકલો",
        
        // Footer
        footer_desc_txt: "આધુનિક સુવિધાઓ, સંપૂર્ણ વેપાર પારદર્શિતા અને ટકાઉ કૃષિ વિકાસ મોડેલ દ્વારા ગુજરાતના સહકારી માળખાને વધુ મજબૂત બનાવવું.",
        foot_links_title: "ઝડપી કડીઓ",
        foot_servs_title: "ખેડૂત સેવાઓ",
        foot_news_title: "બજાર ભાવ પત્રિકા",
        foot_news_desc: "દરરોજના બજાર ભાવોની અપડેટ તમારા ઇમેઇલ પર મેળવવા માટે સબ્સ્ક્રાઇબ કરો.",
        lbl_placeholder_email: "ઇમેઇલ એડ્રેસ દાખલ કરો",
        foot_rights: "© ૨૦૨૬ માર્કેટિંગ યાર્ડ એ.પી.એમ.સી. જામજોધપુર. તમામ હકો સ્વાધીન.",
        foot_legal_1: "પ્રાઈવસી પોલીસી",
        foot_legal_2: "વપરાશની શરતો",
        foot_legal_3: "ઈ-નામ માર્ગદર્શિકા",
        
        // Success Modal Text
        modal_success_title: "અરજી સફળતાપૂર્વક સબમિટ થઈ!",
        modal_success_desc: "ખૂબ ખૂબ આભાર. આપનું વેપારી અરજી પત્રક સુરક્ષિત રીતે એ.પી.એમ.સી. ડેટાબેઝમાં નોંધવામાં આવ્યું છે. અમારી લાયસન્સિંગ સમિતિ આપના જી.એસ.ટી. અને ઓળખપત્રોની સમીક્ષા કરીને ૨૪ થી ૪૮ કલાકમાં આપનો સંપર્ક સાધશે.",
        modal_btn_close: "બારી બંધ કરો"
    }
};

// State Manager
let currentLanguage = "en";

// --- Document Loaded Initializer ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Language Toggle Click Handler
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLanguage = currentLanguage === "en" ? "gu" : "en";
            updateLanguageUI();
        });
    }

    // 2. Render Crop Rates initially
    renderRatesTable("all");
    populateCalculatorCrops();

    // 3. Category Tab filtering
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remove active from all
            tabButtons.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            const category = e.currentTarget.getAttribute("data-category");
            renderRatesTable(category);
        });
    });

    // 4. Search Filter
    const searchInput = document.getElementById("cropSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            // Reset active tabs to 'all' to ensure correct search reach
            const tabButtons = document.querySelectorAll(".tab-btn");
            tabButtons.forEach(b => b.classList.remove("active"));
            const allTab = document.querySelector('.tab-btn[data-category="all"]');
            if (allTab) allTab.classList.add("active");

            renderRatesTable("all", query);
        });
    }

    // 5. Calculator Inputs trigger Valuation recalculation
    const calcCrop = document.getElementById("calcCropSelect");
    const calcUnit = document.getElementById("calcUnitSelect");
    const calcQty = document.getElementById("calcQtyInput");

    if (calcCrop && calcUnit && calcQty) {
        [calcCrop, calcUnit, calcQty].forEach(input => {
            input.addEventListener("input", calculateEarnings);
        });
    }

    // Dynamic Quantity Presets for Farmers
    const presetButtons = document.querySelectorAll(".preset-btn");
    presetButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const qty = e.currentTarget.getAttribute("data-qty");
            if (calcQty) {
                calcQty.value = qty;
                calculateEarnings();
            }
        });
    });

    // Quick Search Filters
    const quickTagsList = document.querySelectorAll(".tag-btn-click");
    quickTagsList.forEach(tag => {
        tag.addEventListener("click", (e) => {
            const queryEn = e.currentTarget.getAttribute("data-query").toLowerCase();
            const queryGu = e.currentTarget.getAttribute("data-query-gu").toLowerCase();
            const activeQuery = currentLanguage === "en" ? queryEn : queryGu;
            
            const searchField = document.getElementById("cropSearchInput");
            if (searchField) {
                searchField.value = activeQuery;
                
                // Reset active tabs to 'all' to ensure correct search reach
                const tabButtons = document.querySelectorAll(".tab-btn");
                tabButtons.forEach(b => b.classList.remove("active"));
                const allTab = document.querySelector('.tab-btn[data-category="all"]');
                if (allTab) allTab.classList.add("active");

                renderRatesTable("all", activeQuery);
            }
        });
    });

    // 6. Testimonial Slider Setup
    setupTestimonialSlider();

    // 7. FAQ Accordion Setup
    setupFaqAccordion();

    // Video Tour Play/Pause Handler
    const videoContainer = document.querySelector(".video-tour-container");
    const video = document.getElementById("apmcTourVideo");
    const playBtn = document.getElementById("videoPlayBtn");

    if (videoContainer && video && playBtn) {
        const handleTogglePlay = () => {
            if (video.paused) {
                video.play();
                videoContainer.classList.add("playing");
            } else {
                video.pause();
                videoContainer.classList.remove("playing");
            }
        };

        playBtn.addEventListener("click", handleTogglePlay);
        video.addEventListener("click", () => {
            if (!video.paused) {
                video.pause();
                videoContainer.classList.remove("playing");
            }
        });
    }

    // 8. Sticky Navbar Scroll Trigger
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        const backToTop = document.querySelector(".back-to-top");
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add("active");
            } else {
                backToTop.classList.remove("active");
            }
        }
    });

    // 9. Back to Top Click
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 10. Hamburger Mobile Toggle Menu
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const navMenu = document.getElementById("navMenu");
    if (menuToggleBtn && navMenu) {
        menuToggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            // Change hamburger character
            if (navMenu.classList.contains("active")) {
                menuToggleBtn.innerHTML = "✕";
            } else {
                menuToggleBtn.innerHTML = "☰";
            }
        });

        // Close menu on click of nav-link
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggleBtn.innerHTML = "☰";
            });
        });
    }

    // 11. Custom Trader Registration Form submission
    const traderForm = document.getElementById("traderRegForm");
    if (traderForm) {
        traderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Validate form
            const applicantName = document.getElementById("traderName").value.trim();
            const firmName = document.getElementById("traderFirm").value.trim();
            const phone = document.getElementById("traderPhone").value.trim();
            const gst = document.getElementById("traderGst").value.trim();
            const agree = document.getElementById("traderAgree").checked;

            if (!applicantName || !firmName || !phone || !gst || !agree) {
                alert(currentLanguage === "en" ? "Please fill in all required fields and accept APMC guidelines!" : "કૃપા કરીને તમામ જરૂરી માહિતી ભરો અને નિયમો સ્વીકારો!");
                return;
            }

            // Open Glass Success Modal
            const modalOverlay = document.getElementById("modalOverlay");
            if (modalOverlay) {
                modalOverlay.classList.add("active");
            }
            traderForm.reset();
        });
    }

    // Modal Dismiss
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            const modalOverlay = document.getElementById("modalOverlay");
            if (modalOverlay) {
                modalOverlay.classList.remove("active");
            }
        });
    }

    // 12. Contact Form Mock Submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(currentLanguage === "en" ? "✓ Message securely sent. Our desk officer will respond shortly." : "✓ આપનો સંદેશો મોકલવામાં આવ્યો છે. હેલ્પડેસ્ક ટૂંક સમયમાં સંપર્ક કરશે.");
            contactForm.reset();
        });
    }

    // 13. Newsletter Mock
    const newsForm = document.getElementById("newsLetterForm");
    if (newsForm) {
        newsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(currentLanguage === "en" ? "✓ Thank you for subscribing to daily rates!" : "✓ દૈનિક બજાર ભાવો મેળવવા બદલ સબ્સ્ક્રાઇબ કરવા બદલ આભાર!");
            newsForm.reset();
        });
    }

    // 14. Reveal on Scroll Animation (IntersectionObserver)
    setupScrollAnimations();
});

// --- Dynamic Text Translator Core ---
function updateLanguageUI() {
    // Select all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLanguage][key]) {
            el.innerHTML = translations[currentLanguage][key];
        }
    });

    // Update input placeholders
    const searchInput = document.getElementById("cropSearchInput");
    if (searchInput) {
        searchInput.placeholder = translations[currentLanguage]["search_placeholder"];
    }

    const emailInputs = document.querySelectorAll(".newsletter-input");
    emailInputs.forEach(input => {
        input.placeholder = translations[currentLanguage]["lbl_placeholder_email"];
    });

    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
        langToggleBtn.querySelector(".lang-lbl").textContent = currentLanguage === "en" ? "ગુજરાતી" : "English";
    }

    // Re-render rates table and price calculator crops list with active translations
    const activeTab = document.querySelector(".tab-btn.active");
    const category = activeTab ? activeTab.getAttribute("data-category") : "all";
    const searchQuery = document.getElementById("cropSearchInput")?.value.toLowerCase().trim() || "";
    renderRatesTable(category, searchQuery);
    populateCalculatorCrops();
    calculateEarnings();
}

// --- Render Table Content dynamically ---
function renderRatesTable(category = "all", searchQuery = "") {
    const tbody = document.getElementById("ratesTableBody");
    if (!tbody) return;

    tbody.innerHTML = "";

    // Filter crop database
    const filtered = cropData.filter(crop => {
        const matchCategory = category === "all" || crop.category === category;
        const cropName = currentLanguage === "en" ? crop.nameEn.toLowerCase() : crop.nameGu.toLowerCase();
        const matchSearch = cropName.includes(searchQuery);
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted); font-weight: 600;">
                    ${currentLanguage === "en" ? "No commodities match your criteria." : "કોઈ પાકની વિગત મળેલ નથી."}
                </td>
            </tr>
        `;
        return;
    }

    filtered.forEach(crop => {
        const name = currentLanguage === "en" ? crop.nameEn : crop.nameGu;
        
        let trendBadge = "";
        if (crop.trend === "up") {
            trendBadge = `<span class="badge-up">▲ ${translations[currentLanguage]["trend_up"]}</span>`;
        } else if (crop.trend === "down") {
            trendBadge = `<span class="badge-down">▼ ${translations[currentLanguage]["trend_down"]}</span>`;
        } else {
            trendBadge = `<span class="badge-stable">${translations[currentLanguage]["trend_stable"]}</span>`;
        }

        const tr = document.createElement("tr");
        tr.className = "reveal";
        tr.innerHTML = `
            <td class="commodity-cell">
                <span class="crop-icon-lbl">${crop.icon}</span>
                <span>${name}</span>
            </td>
            <td><strong>${crop.arrival.toLocaleString()}</strong></td>
            <td>₹${crop.minPrice.toLocaleString()}</td>
            <td>₹${crop.maxPrice.toLocaleString()}</td>
            <td><strong style="color: var(--primary); font-size:1.05rem;">₹${crop.modalPrice.toLocaleString()}</strong></td>
            <td>${trendBadge}</td>
        `;
        tbody.appendChild(tr);
    });

    // Re-trigger scroll observer to apply active transition styles
    setTimeout(observeNewElements, 50);
}

// --- Populate Income Calculator Dropdown ---
function populateCalculatorCrops() {
    const dropdown = document.getElementById("calcCropSelect");
    if (!dropdown) return;

    // Save previous selected value if any
    const prevSelected = dropdown.value;
    dropdown.innerHTML = "";

    cropData.forEach(crop => {
        const option = document.createElement("option");
        option.value = crop.id;
        option.textContent = currentLanguage === "en" ? crop.nameEn : crop.nameGu;
        dropdown.appendChild(option);
    });

    // Restore previous selection if valid
    if (prevSelected && cropData.some(c => c.id === prevSelected)) {
        dropdown.value = prevSelected;
    }
}

// --- Income Calculator Arithmetic Logic ---
function calculateEarnings() {
    const cropId = document.getElementById("calcCropSelect")?.value;
    const unit = document.getElementById("calcUnitSelect")?.value;
    const quantity = parseFloat(document.getElementById("calcQtyInput")?.value);
    const resultVal = document.getElementById("calcResultVal");

    if (!resultVal) return;

    if (!cropId || isNaN(quantity) || quantity <= 0) {
        resultVal.textContent = "₹ 0.00";
        return;
    }

    const crop = cropData.find(c => c.id === cropId);
    if (!crop) return;

    const modalRate = crop.modalPrice; // Price per Quintal (100 kg)
    let totalEarnings = 0;

    if (unit === "quintal") {
        totalEarnings = modalRate * quantity;
    } else if (unit === "man") {
        // 1 Man = 20 kg. 1 Quintal = 100 kg. So, 5 Mans = 1 Quintal.
        // Therefore, Price per Man = ModalRate / 5
        const pricePerMan = modalRate / 5;
        totalEarnings = pricePerMan * quantity;
    }

    // Format currency to Indian Rupees System
    const formatted = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(totalEarnings);

    resultVal.textContent = formatted;
}

// --- Testimonials Slider Setup ---
function setupTestimonialSlider() {
    const track = document.querySelector(".testimonial-track");
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("prevTestBtn");
    const nextBtn = document.getElementById("nextTestBtn");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    prevBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Auto play every 6 seconds
    let slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 6000);

    // Reset interval on user interaction
    [prevBtn, nextBtn].forEach(btn => {
        btn?.addEventListener("click", () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlider();
            }, 6000);
        });
    });
}

// --- FAQ Accordion Logic ---
function setupFaqAccordion() {
    const faqHeaders = document.querySelectorAll(".faq-header");
    faqHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const body = item.querySelector(".faq-body");
            const isActive = item.classList.contains("active");

            // Close all first for elegant single-open accordion feel
            document.querySelectorAll(".faq-item").forEach(itm => {
                itm.classList.remove("active");
                itm.querySelector(".faq-body").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
}

// --- Scroll Entrance Intersection Observer ---
function setupScrollAnimations() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// Helper to observe elements rendered dynamically (like table rows)
function observeNewElements() {
    const revealElements = document.querySelectorAll(".rates-table tbody .reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });
    revealElements.forEach(el => observer.observe(el));
}
