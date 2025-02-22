import React from 'react';

interface StepControllerProps {
  currentStep: number;
  lastStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleCancel: () => void;
  handleSubmit: () => void;
  isNextDisabled: boolean;
}

const StepController: React.FC<StepControllerProps> = ({
  currentStep,
  lastStep,
  handleCancel,
  handleNext,
  handlePrev,
  handleSubmit,
  isNextDisabled
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white sticky bottom-0 left-0 right-0">
      {/* Cancel Link */}
      <div>
        <button onClick={handleCancel} className="text-black underline text-sm font-semibold">
          Cancel
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        {currentStep !== 1 && (
          <button
            onClick={handlePrev}
            className="flex items-center justify-center px-4 py-2 bg-gray-100 text-black text-sm font-semibold rounded-md border border-gray-300"
          >
            <span className="mr-2">←</span> Go Back
          </button>
        )}

        {currentStep === lastStep ? (
          <button
            onClick={handleSubmit}
            className={`inline-flex h-10 min-w-[68px] px-6 py-2.5 justify-center items-center gap-2.5 flex-shrink-0 rounded-lg ${
              isNextDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2D2D2D] text-white'
            }`}
            disabled={isNextDisabled}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`inline-flex h-10 min-w-[68px] px-6 py-2.5 justify-center items-center gap-2.5 flex-shrink-0 rounded-lg ${
              isNextDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2D2D2D] text-white'
            }`}
            disabled={isNextDisabled}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepController;
