export default function ProgramCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
      <div className="bg-violet-light/20 p-4 rounded-full mb-4 text-violet">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
