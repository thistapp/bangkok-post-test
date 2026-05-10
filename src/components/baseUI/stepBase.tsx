const steps = ["Select plan", "Payment", "Account & Receipt"];

const StepIndicator = ({currentStep}: {currentStep: number}) => {
	return (
		<div className='flex items-center w-full max-w-2xl mx-auto px-8 my-5'>
			{steps.map((step, i) => {
				const isCompleted = i < currentStep;
				const isActive = i === currentStep;

				return (
					<div key={i} className='flex items-center flex-1 last:flex-none'>
						<div className='flex flex-col items-center gap-2'>
							<div
								className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
									isCompleted
										? "bg-gray-900"
										: isActive
										? "bg-[#0054C6]"
										: "bg-[#0054C6]"
								}`}
							>
								{isCompleted ? (
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='white'
										strokeWidth='2.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M5 13l4 4L19 7' />
									</svg>
								) : isActive ? (
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='white'
										strokeWidth='2.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M5 13l4 4L19 7' />
									</svg>
								) : (
									<div className=''></div>
								)}
							</div>
							<span className='text-sm text-gray-700 whitespace-nowrap'>
								{step}
							</span>
						</div>
						{i < steps.length - 1 && (
							<div
								className={`flex-1 h-0.5 mb-6 transition-colors ${
									isCompleted ? "bg-gray-900" : "bg-[#0054C6]"
								}`}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default StepIndicator;
