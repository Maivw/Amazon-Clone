import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<Carousel>
					<div>
						<img
							className="home__image"
							src="https://res.cloudinary.com/maivw/image/upload/v1611944869/amazona-moive_1_vmwidv.jpg"
							alt="banner"
						/>
					</div>
					<div>
						<img
							className="home__image"
							src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/SITE_FLIPS/WIN_1/L0/1COL_HERO_multi_egress_031.jpg"
							alt="banner"
						/>
					</div>
					<div>
						<img
							className="home__image"
							src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
							alt="banner"
						/>
					</div>
					<div>
						<img
							className="home__image"
							src="https://media-exp1.licdn.com/dms/image/C561BAQHCZ83vKVJVkg/company-background_10000/0/1578682517809?e=2159024400&v=beta&t=f-4y0LyhZf0w-UiFS_Afwgi50_7YyFDuuJn8itEp2vw"
							alt="banner"
						/>
					</div>
				</Carousel>

				<div className="home__row">
					<Product
						id="123456"
						title="2-IN-1 Face Massager Roller Golden 3D Roller Electric Sonic Energy Face Roller and T Shape Face Massager Kit for Face Lift Beauty Bar Skin Care Tools Gift Set for Women"
						price={12.84}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61ahQLr18VL._SL1080_.jpg"
					/>
					<Product
						id="2334567"
						title="Face Massager Roller 2 in 1 Golden 3D Roller Electric Sonic Energy Face Roller and T Shape Face Massager Kit Waterproof Vibrating Beauty Skin Care Tools for Women"
						price={20.96}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/612FcK%2B5UML._AC_SL1000_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="98334567"
						title="3-IN-1 Electric Jade Roller Vibrating Facial Roller & Face Massager, Rose Quartz"
						price={20.96}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61SX%2BETaLGL._SL1500_.jpg"
					/>
					<Product
						id="87334567"
						title="Roller Anti Aging Jade roller Therapy 100% Natural jade facial roller double Neck Healing Slimming Massager (Rose Quartz Roller)"
						price={20.7}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/81-UgIpmtRL._SL1500_.jpg"
					/>
					<Product
						id="678334567"
						title="LeiCare Rose Quartz Roller, Pink Jade Roller for Face - Natural Stone Facial Roller, Face Massager Beauty Tool for Wrinkles, Skin Tightening, Lift Firming - Eye Puffiness Treatment, Anti Aging"
						price={27.96}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61SX%2BETaLGL._SL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="008334567"
						title="VECELO Classic Upholstered Platform Bed Diamond Stitched Cloth Panel Headboard"
						price={190.95}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/81RnxkMmk7L._AC_SL1500_.jpg"
					/>
					<Product
						id="6098334567"
						title="Allewie Queen Size Upholstered Platform Bed Frame with Headboard and Wooden Slats"
						price={187.32}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/717%2B-2jzS4L._AC_SL1300_.jpg"
					/>
					<Product
						id="6098334567"
						title="HOMECHO Queen Bed Frame, Modern Upholstered Platform Bed with Headboard"
						price={227.61}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/81Xb-khPHIL._AC_SL1500_.jpg"
					/>
					<Product
						id="676758334567"
						title="Naomi Home Isabella Wood Platform Bed Full/Espresso"
						price={207.86}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71SiVFCF0yL._AC_SL1000_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="670007"
						title="Vitamix Explorian Blender, Professional-Grade, 64 oz. Low-Profile Container, Red (Renewed)"
						price={298.5}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/51L5EzDC76L._AC_SL1000_.jpg"
					/>
					<Product
						id="758334567"
						title="Vitamix A2300 Ascent Series Smart Blender, Professional-Grade, 64 oz. Low-Profile Container, White"
						price={404.67}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61pxEAZZ62L._AC_SL1500_.jpg"
					/>
					<Product
						id="678876567"
						title="Waring Commercial MX1100XTX Hi-Power Electronic Keypad Blender with Timer and The Raptor Copolyester Container, 64-Ounce"
						price={398.7}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/61jRZuvXalL._SL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="678"
						title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
						price={769.72}
						image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="80090"
						title="Fish Oil Omega 3 Softgels Supplement. Norway Sourced."
						price={18.52}
						image="https://images-na.ssl-images-amazon.com/images/I/81FQMnhbwIL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="80091"
						title="Men's Daily Multimineral Multivitamin Supplement."
						price={19.32}
						image="https://images-na.ssl-images-amazon.com/images/I/81%2Bf2mjUUmL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="80092"
						title="Turmeric Curcumin with BioPerine, Boswellia and Ginger."
						price={20.02}
						image="https://images-na.ssl-images-amazon.com/images/I/81ioyIbVdZL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="80093"
						title="Turmeric Curcumin Saffron, True Ceylon Cinnamon, Cardamom, Bioperine."
						price={16.27}
						image="https://images-na.ssl-images-amazon.com/images/I/81SrlGvjsJL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="70060"
						title="LeapFrog Scoop and Learn Ice Cream Cart Deluxe (Frustration Free Packaging)"
						price={54.64}
						image="https://images-na.ssl-images-amazon.com/images/I/71XnVV9cZsL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="70062"
						title="LCD Writing Tablet, Toys for 2 3 4 5 6 Years Old Girls Boys, LCD Drawing Tablet for Kids"
						price={19.29}
						image="https://images-na.ssl-images-amazon.com/images/I/717hGwZ1RyL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="60780"
						title="Take Apart Dinosaur Toys for Boys - Building Toy Set with Electric Drill Construction Engineering Play Kit STEM Learning for Kids Girls Age 3 4 5 Year Old"
						price={29.89}
						image="https://images-na.ssl-images-amazon.com/images/I/710mVZsum-L._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="60781"
						title="Take Apart Toys with Electric Drill | Converts to Remote Control Car | 3 in one Construction Truck Take Apart Toy for Boys | Gift Toys for Boys 3,4,5,6,7 Year Olds"
						price={35.0}
						image="https://images-na.ssl-images-amazon.com/images/I/71KU-NbDNIL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="60782"
						title="TEMI 5-in-1 Friction Power Toy Vehicle in Carrier Truck, Steering Construction Truck with Lights & Siren Sounds, Small Bulldozer/Cement Mixer/Water Vehicle - Gift for Kids Aged 3+"
						price={20.34}
						image="https://images-na.ssl-images-amazon.com/images/I/71KZwIWLv4L._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="34070"
						title="Portion Control Containers Bpa-Free Food Container (1 Pack,30 Ounce)"
						price={9.89}
						image="https://images-na.ssl-images-amazon.com/images/I/917w9hATZuL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="34071"
						title="Glass Food Storage Containers with Lids (Bamboo) - 4 Piece Value Set"
						price={35.07}
						image="https://images-na.ssl-images-amazon.com/images/I/71235ExJAVL._AC_SL1245_.jpg"
						rating={5}
					/>
					<Product
						id="34072"
						title="Razab 6 Piece 22 Oz Superior Glass Food Storage Containers (Set of 3)"
						price={18.54}
						image="https://images-na.ssl-images-amazon.com/images/I/91e8SdWySeL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="34073"
						title="Lunch Containers Portion Control Containers Bpa-Free (5 Pack,30 Ounce)"
						price={14.94}
						image="https://images-na.ssl-images-amazon.com/images/I/81a7XtG0aOL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="67789"
						title="2019 Subaru WRX Limited
						CVT, Lapis Blue Pearl"
						price={30200.72}
						image="https://m.media-amazon.com/images/I/617K8lUSRNL._UY560_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="56743"
						title="2019 Honda Insight LX
						CVT, Cosmic Blue Metallic"
						price={18700.72}
						image="https://m.media-amazon.com/images/I/61jtYeGOokL._UY560_.jpg"
						rating={4}
					/>
					<Product
						id="67456"
						title="2019 Chevrolet Cruze LS
						4-Door Sedan, Silver Ice Metallic"
						price={14900.72}
						image="https://m.media-amazon.com/images/I/613W9aGgr0L._UY560_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="10101"
						title="AeroGarden Harvest-Black Indoor Hydroponic Garden"
						price={199.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81DPs6WZXjL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="10102"
						title="AeroGarden Black Bounty Indoor Hydroponic Garden"
						price={278.22}
						image="https://images-na.ssl-images-amazon.com/images/I/810urPXbnjL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="10103"
						title="AeroGarden Bounty Indoor Hydroponic Herb Garden, Black"
						price={245.72}
						image="https://images-na.ssl-images-amazon.com/images/I/81RVpBCepPL._AC_SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="230101"
						title="Keter Urban Knit Pouf Ottoman Set of 2 with Storage Table for Patio and Room Décor-Perfect for Balcony, Deck, and Outdoor Seating, Dune/Misty Blue"
						price={159.99}
						image="https://images-na.ssl-images-amazon.com/images/I/8119tD4SobL._AC_SL1205_.jpg"
						rating={5}
					/>
					<Product
						id="2340102"
						title="Grand patio 3 Piece Wicker Outdoor Spring Motion Bistro Set, Cushioned Chairs and Round Table Furniture Seat Brown"
						price={118.22}
						image="https://images-na.ssl-images-amazon.com/images/I/71Q0jEPZg5L._AC_SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="310101"
						title="49 Pcs Garden Tools Set, Extra Succulent Tools Set, Heavy Duty Gardening Tools Aluminum with Soft Rubberized Non-Slip Handle Tools, Durable Storage Tote Bag, Gifts for Men Women"
						price={29.59}
						image="https://images-na.ssl-images-amazon.com/images/I/71sX3%2Bj1IaL._AC_SL1500_.jpg"
						rating={3}
					/>
					<Product
						id="3140102"
						title="BNCHI Gardening Tools Set,12 Pieces Stainless Steel Garden Hand Tool, Gardening Gifts for Women,Men,Gardener (Blue)"
						price={18.12}
						image="https://images-na.ssl-images-amazon.com/images/I/71YyZFjr%2BNL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="320101"
						title="wanyi Garden Tool Set, 6-Piece Aluminum Lightweight Gardening kit with Soft Rubber Anti-Skid Ergonomic Handle, Garden Gift kit"
						price={23.99}
						image="https://images-na.ssl-images-amazon.com/images/I/61YNboFs5FL._AC_SL1500_.jpg"
						rating={3}
					/>
					<Product
						id="33540102"
						title="Gardening Tool Set - 9 Pieces.Included Hand Trowel Shovels Rake, Garden Gloves and Garden Tote, Heavy Duty Garden Spade, Steel Pruning Shears, Garden Gifts"
						price={88.2}
						image="https://images-na.ssl-images-amazon.com/images/I/6139P598MXL._AC_SL1000_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="5090340102"
						title="Dezaart Wood Pendant Light, Modern Mid Century Chandelier, Lasercut Ceiling Scandinavian Lampshade, Minimal Hanging 1-Light Wooden Handmade Lighting Fixture Brown for Kitchen, Living Room, Dining Room"
						price={124.39}
						image="https://images-na.ssl-images-amazon.com/images/I/81Uq6NBfdvL._SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="530340102"
						title="Dezaart Elipse Wood Pendant Light, Modern Industrial Chandelier, Wooden Ceiling Contemporary Lampshade, Minimal Hanging 1-Light Mid Century Lighting Fixture Brown for Foyer, Living Room, Dining Room"
						price={118.12}
						image="https://images-na.ssl-images-amazon.com/images/I/81a4u9DULOL._SL1500_.jpg"
						rating={3}
					/>
					<Product
						id="53030101"
						title="Wood Pendant Light, Lasercut Chandelier Lighting, Modern Interior Style Lamp Shade Brown, 1-Light Geometric Minimalistic Mid-Century Scandinavian Fixture for Living Room, Dining Room, Kitchen, Bedroom"
						price={109.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81gnyEBbq2L._SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="1293030101"
						title="The Luciferous | Gourd Lamp Night Light Boho Hippie Home Decor Unique Birthday Anniversary Gift Idea Art"
						price={119.89}
						image="https://images-na.ssl-images-amazon.com/images/I/81cQAURWIbL._SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="43217"
						title="Simple Joys by Carter's Boys' 6-Pack Short-Sleeve Bodysuit"
						price={24.89}
						image="https://images-na.ssl-images-amazon.com/images/I/91sks1FvK4L._AC_UY879_.jpg"
						rating={4}
					/>
					<Product
						id="43216"
						title="Chamie Newborn Baby Bodysuit 5-Pack Short Sleeve Onesies Baby Clothes for Boys and Girls"
						price={18.11}
						image="https://images-na.ssl-images-amazon.com/images/I/71cRuLebxaL._AC_UL1000_.jpg"
						rating={4}
					/>
					<Product
						id="43215"
						title="Hanes unisex-baby Ultimate Baby Flexy 5 Pack Short Sleeve Bodysuits"
						price={19.29}
						image="https://images-na.ssl-images-amazon.com/images/I/91fuyXJT5WL._AC_UX679_.jpg"
						rating={5}
					/>
					<Product
						id="43214"
						title="Chamie Newborn Baby Onesies 3-Pack Short Sleeve Bodysuit Baby Clothes for Boys and Girls"
						price={13.95}
						image="https://images-na.ssl-images-amazon.com/images/I/611uNPPOdwL._AC_UX679_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="813217"
						title="I Paused My Game to Be Here | Funny Video Gamer Humor Joke for Men Women T-Shirt"
						price={16.59}
						image="https://images-na.ssl-images-amazon.com/images/I/81RdISJ2jDL._AC_UX679_.jpg"
						rating={3}
					/>
					<Product
						id="813216"
						title="I Paused My Game To Be Here Retro Vintage Video Gamer Gift T-Shirt"
						price={15.61}
						image="https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C81XD1Y%2B%2BdHL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="803217"
						title="Wool Cozy Crazy Novelty Socks - KEAZA WZ02 Thick Cotton Vintage Women Sock 4pack"
						price={14.49}
						image="https://images-na.ssl-images-amazon.com/images/I/91z5XAdxFAL._AC_UX679_.jpg"
						rating={3}
					/>
					<Product
						id="803216"
						title="5 Pairs Womens Warm Wool Socks Winter Vintage Thick knit Soft Cabin Cozy Crew Socks Gifts"
						price={12.11}
						image="https://images-na.ssl-images-amazon.com/images/I/71-2XEKdETL._AC_UX679_.jpg"
						rating={5}
					/>
					<Product
						id="803214"
						title="Cartoon Cotton Dog Crew Socks - KEAZA WZ10 Novelty Liner Socks for Women 5-pack"
						price={14.91}
						image="https://images-na.ssl-images-amazon.com/images/I/71yUe77oHmL._AC_UX679_.jpg"
						rating={3}
					/>
					<Product
						id="803211"
						title="Super Soft Fluffy Plush Slipper Socks, Home Sleeping Fuzzy Cozy Gift Socks For Women Girls"
						price={13.11}
						image="https://images-na.ssl-images-amazon.com/images/I/71BXvkJyeRL._AC_UL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="7903217"
						title="Glamorousky Elegant Rose Necklace with Red Austrian Element Crystals and Crystal Glass"
						price={17.49}
						image="https://images-na.ssl-images-amazon.com/images/I/51VbQrAQTwL._AC_UL1050_.jpg"
						rating={3}
					/>
					<Product
						id="7903216"
						title="Glamorousky Elegant Rose Necklace with Blue Austrian Element Crystals"
						price={27.11}
						image="https://images-na.ssl-images-amazon.com/images/I/51JJw%2Bg5t6L._AC_UL1050_.jpg"
						rating={5}
					/>
					<Product
						id="7903214"
						title="Glamorousky Blue Flower and Tiny Butterfly Necklace with Blue Austrian Element Crystals"
						price={27.91}
						image="https://images-na.ssl-images-amazon.com/images/I/51QoKTV-OoL._AC_UL1050_.jpg"
						rating={5}
					/>
					<Product
						id="7903211"
						title="Glamorousky Colorful Flower and Tiny Butterfly Necklace with Multi-Color Austrian Element Crystals"
						price={28.76}
						image="https://images-na.ssl-images-amazon.com/images/I/510GxER5b5L._AC_UL1050_.jpg"
						rating={5}
					/>
					<Product
						id="7953211"
						title="Betsey Johnson Weave and Sew Multi Woven Heart Illusion Necklace"
						price={43.35}
						image="https://images-na.ssl-images-amazon.com/images/I/814h%2BPccnKL._AC_UL1500_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

{
	/* <div className="home">
{products.cat1.map((product) => (
	<Product
		id={product.id}
		title={product.title}
		price={product.price}
		image={product.image}
		rating={product.image}
	/>
))}
</div> */
}
