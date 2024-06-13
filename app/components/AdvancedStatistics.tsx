import CardSections from "./Cards/CardSections";

const AdvancedStatistics = () => {
  return (
    <div className=" bg-gray-200 -mt-16">
      <div className="pt-60 flex flex-col items-center justify-center">
        <div className="text-6xl font-bold">Advanced Statistics</div>
        <div className="text-gray-500 text-center mt-8">
          <p>Track How Your Links are performing across the web with</p>
          <p className="mt-2">our advanced statistics dashboard.</p>
        </div>
      </div>
      <CardSections />
    </div>
  );
};

export default AdvancedStatistics;
