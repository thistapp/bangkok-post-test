import {EpaperFUQModel} from "@/src/models/epaperModels";
import Link from "next/link";

export const fuqEpaperType: EpaperFUQModel[] = [
	{
		question:
			"What is the difference between reading the Bangkok Post newspaper, the Epaper and the website?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					<h3 className='font-bold'>Epaper</h3>
					The Epaper can be accessed anywhere in the world on up to three mobile
					devices and one web browser with a single login. The annual plan is
					more affordable than the printed edition and includes translation into
					over 20 languages. You can conveniently read on a web browser or in
					our application. The app allows online and offline reading by
					downloading the Epaper and saving it for offline reading, with content
					identical to the printed newspaper.
				</div>
				<div className='w-full'>
					<h3 className='font-bold'>Printed</h3>
					Newspaper Our newspaper has been published for 80 years, offering
					premium-quality content on paper. Besides daily updates, it is perfect
					as a collectible. You will also enjoy crosswords and comic strips that
					are not available on the website.
				</div>
				<div className='w-full'>
					<h3 className='font-bold'>Website</h3>
					The website brings you the fastest updates, with breaking news from
					our editorial newsroom. You can subscribe to newsletters for exclusive
					updates delivered to your inbox. The site also offers a wide range of
					categories and features, including Learning tools, vocabulary cards,
					video podcasts and much more.
				</div>
				<div className='w-full'>
					For more details, please contact our staff.
					<br />
					<Link href='mailto:enewspaper@bangkokpost.co.th'>
						Email:{" "}
						<span className='text-blue-500 underline'>
							enewspaper@bangkokpost.co.th
						</span>
					</Link>
					<br />
					<Link href='tel:026164615'>
						Tel: <span className='text-blue-500 underline'>0-2616-4615</span>{" "}
						(Mon-Fri 8:30 AM-5:30 PM,UTC+7)
					</Link>
				</div>
			</div>
		),
	},
	{
		question: "Do you offer a free trial of the Epaper for new readers?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					Yes. You can request a free 3-day trial by contacting us.
				</div>
				<div className='w-full'>
					For more details, please contact our staff.
					<br />
					<Link href='mailto:enewspaper@bangkokpost.co.th'>
						Email:{" "}
						<span className='text-blue-500 underline'>
							enewspaper@bangkokpost.co.th
						</span>
					</Link>
					<br />
					<Link href='tel:026164615'>
						Tel: <span className='text-blue-500 underline'>0-2616-4615</span>{" "}
						(Mon-Fri 8:30 AM-5:30 PM,UTC+7)
					</Link>
				</div>
			</div>
		),
	},
	{
		question: "Can I still read the Epaper if I'm offline?",
		answer: (
			<div className='w-full'>
				Yes. Our app allows you to read both online and offline. You can
				download the Epaper and save it for offline reading.
			</div>
		),
	},
	{
		question: "How do I switch from a monthly plan to a yearly one?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					You can switch via your account on our website or contact our staff
					for assistance.
				</div>
				<div className='w-full'>
					For more details, please contact our staff.
					<br />
					<Link href='mailto:enewspaper@bangkokpost.co.th'>
						Email:{" "}
						<span className='text-blue-500 underline'>
							enewspaper@bangkokpost.co.th
						</span>
					</Link>
					<br />
					<Link href='tel:026164615'>
						Tel: <span className='text-blue-500 underline'>0-2616-4615</span>{" "}
						(Mon-Fri 8:30 AM-5:30 PM,UTC+7)
					</Link>
				</div>
			</div>
		),
	},
	{
		question: "How do I create an account?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					You can create an account at{" "}
					<Link href='https://www.bangkokpost.com/Epaper' target='_blank'>
						https://www.bangkokpost.com/Epaper
					</Link>{" "}
					or contact our staff for assistance.
				</div>
				<div className='w-full'>
					For more details, please contact our staff.
					<br />
					<Link href='mailto:enewspaper@bangkokpost.co.th'>
						Email:{" "}
						<span className='text-blue-500 underline'>
							enewspaper@bangkokpost.co.th
						</span>
					</Link>
					<br />
					<Link href='tel:026164615'>
						Tel: <span className='text-blue-500 underline'>0-2616-4615</span>{" "}
						(Mon-Fri 8:30 AM-5:30 PM,UTC+7)
					</Link>
				</div>
			</div>
		),
	},
	{
		question: "I've forgotten my password?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					If you’ve forgotten your password,{" "}
					<Link href={"https://www.bangkokpost.com/epaper/howto"}>
						click here
					</Link>{" "}
					to reset on the site and use your registered email address. If you
					still need assistance, please contact Customer Service.
				</div>
				<div className='w-full'>
					For more details, please contact our staff.
					<br />
					<Link href='mailto:enewspaper@bangkokpost.co.th'>
						Email:{" "}
						<span className='text-blue-500 underline'>
							enewspaper@bangkokpost.co.th
						</span>
					</Link>
					<br />
					<Link href='tel:026164615'>
						Tel: <span className='text-blue-500 underline'>0-2616-4615</span>{" "}
						(Mon-Fri 8:30 AM-5:30 PM,UTC+7)
					</Link>
				</div>
			</div>
		),
	},
	{
		question: "Can I use my account on multiple devices?",
		answer: (
			<div className='w-full'>
				Yes. You can use your account on up to three mobile devices and one web
				browser using a single login.
			</div>
		),
	},
	{
		question: "Do you have an app for reading the news?",
		answer: (
			<div className='w-full'>
				Yes. A free Epaper is available. You can also access it through your web
				browser.
			</div>
		),
	},
	{
		question: "How do I cancel my subscription?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					You can cancel at any time by contacting our staff.
				</div>
				<div className='w-full'>
					For more details, please contact our staff.
					<br />
					<Link href='mailto:enewspaper@bangkokpost.co.th'>
						Email:{" "}
						<span className='text-blue-500 underline'>
							enewspaper@bangkokpost.co.th
						</span>
					</Link>
					<br />
					<Link href='tel:026164615'>
						Tel: <span className='text-blue-500 underline'>0-2616-4615</span>{" "}
						(Mon-Fri 8:30 AM-5:30 PM,UTC+7)
					</Link>
				</div>
				<div className='text-red-500'>
					*Please be advised that all payments are non-refundable.
				</div>
			</div>
		),
	},
	{
		question: "How can I check my subscription status?",
		answer: (
			<div className='w-full'>
				You can view your current status and plan details in{" "}
				<span className='underline'>My profile</span> under the My Subscription
				section.
			</div>
		),
	},
	{
		question: "Why can I not access the content after payment?",
		answer: (
			<div className='w-full'>
				Please ensure that you have completed all the required information in
				the steps following your payment and that you have received an
				activation email to verify your account. If you have already completed
				these steps and still cannot access the service, please check your
				status at <span className='underline'>My profile</span> under the My
				Subscription section or contact our support team for further assistance.
			</div>
		),
	},
	{
		question: "Is the Epaper email the same as the website login?",
		answer: (
			<div className='flex flex-wrap gap-4'>
				<div className='w-full'>
					Not necessarily. The email used to subscribe to and access the Epaper
					may be different from the one used for website login.
				</div>
				<div className='w-full'>
					The website login is designed to verify user access and activity,
					while Epaper access is linked to the email provided during the
					subscription process.
				</div>
				<div className='w-full'>
					If you want to view your Epaper subscription details or plan history,
					you can go to My Profile on the website. Please make sure to sign in
					using the same email address you used when subscribing to the Epaper.
				</div>
			</div>
		),
	},
];
