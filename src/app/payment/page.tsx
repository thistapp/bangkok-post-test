import {PaymentMenus} from "@/config/payment/paymentMenus";
import ButtonBaseUI from "@/src/components/baseUI/buttonBase";
import InputBaseForm from "@/src/components/baseUI/inputBase";
import RadioBase from "@/src/components/baseUI/radioBase";
import StepIndicator from "@/src/components/baseUI/stepBase";

export default function page() {
	return (
		<div className='w-full min-h-full bg-[#F9F5EA]'>
			<div className='w-full p-4 flex justify-center items-center'>
				<div className='bg-white w-full lg:w-9/12 p-4 lg:px-32 lg:py-16 my-16'>
					<h1 className='text-center text-xl font-bold'>Payment Information</h1>
					{/* Step */}
					<StepIndicator currentStep={1} />
					<div className='my-4'>
						<p className='text-left text-lg'>Order Item</p>
						<div className='border-b-2 border-black mt-2' />
					</div>
					{/* Order Item */}
					<div className='w-full'>
						<div className='w-full p-4 bg-[#EDF2FE] border-2 border-[#EDF2FE]'>
							<div className='w-full flex flex-col text-center'>
								<p className='text-lg font-bold'>Epaper 12 months</p>
								<p className=' whitespace-break-spaces text-[#6E6E6E]'>
									{`4,700 THB for 12 months\nYou can cancel anytime.`}
								</p>
							</div>
						</div>
						<div className='my-5 '>
							<p className='text-[#346AEA] underline cursor-pointer'>
								Change plans
							</p>
							<div className='border-b-2 border-gray-200 mt-4' />
						</div>
					</div>
					{/* Redeem Code */}
					<div className='w-full'>
						<div className='w-full flex gap-3'>
							<InputBaseForm
								className='w-2/3!'
								placeHolder='Redeem Code'
								name='code'
							/>
							<ButtonBaseUI className='w-1/3! text-base!'>APPLY</ButtonBaseUI>
						</div>
						<div className='w-full flex flex-col gap-4 mt-4'>
							<div className='w-full flex flex-wrap justify-between'>
								<p>Price</p>
								<p>4700 Baht</p>
							</div>
							<div className='w-full flex flex-wrap justify-between'>
								<p>Discount:</p>
								<p className='text-red-500'>-700 Baht</p>
							</div>
							<div className='w-full flex flex-wrap justify-between font-bold'>
								<p>Total</p>
								<p>4,000 Baht</p>
							</div>
						</div>
						<div className='border-b-2 border-gray-200 mt-4' />
					</div>
					{/* Payment method */}
					<div className='w-full'>
						<div className='mt-8 mb-4'>
							<p className='text-left text-lg font-bold'>Payment method</p>
							<div className='border-b-2 border-black mt-2' />
						</div>
						<div className='bg-[#527DFA] rounded-md p-4 text-white'>
							<p className='text-center text-sm'>
								After payment, you will be redirected to the information page.
								Please accept T&Cs
							</p>
						</div>
						<div className='w-full flex flex-wrap gap-4 mt-4'>
							<RadioBase data={PaymentMenus} />
						</div>
						<div className='w-full flex flex-col mt-4 gap-4'>
							<div className='w-full'>
								<p>Cardholder Name</p>
								<InputBaseForm
									className=''
									placeHolder='Cardholder Name'
									name='card-name'
								/>
							</div>
							<div className='w-full'>
								<p>Card Number</p>
								<InputBaseForm
									className=''
									placeHolder='**** **** **** ****'
									name='card-number'
									type={"card"}
								/>
							</div>
							<div className='w-full flex flex-row gap-2'>
								<div className='w-1/2'>
									<p>Expiry Date</p>
									<InputBaseForm
										className=''
										placeHolder='MM / YY'
										name='exp'
										type={"expire"}
									/>
								</div>
								<div className='w-1/2'>
									<p>CVV</p>
									<InputBaseForm
										className=''
										placeHolder='CVV'
										name='CVV'
										type={"cvv"}
									/>
								</div>
							</div>
						</div>
						<div className=''>
							<ButtonBaseUI className='w-full! text-base!'>
								Confirm Payment
							</ButtonBaseUI>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
