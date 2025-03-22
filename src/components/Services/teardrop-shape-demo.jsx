import { TeardropShape } from "./teardrop-shape"

const TeardropShapeDemo = () => {
  return (
    <div className="p-12 flex flex-col items-center justify-center gap-8 bg-gray-50">
      <h2 className="text-2xl font-bold">Teardrop Shape Examples</h2>

      <div className="flex flex-wrap gap-8 justify-center">
        <TeardropShape width={200} height={200} color="#2DBA98" />
        <TeardropShape width={150} height={150} color="#1a6b9f" />
        <TeardropShape width={100} height={100} color="#FF9500" />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Usage Example:</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          {`<TeardropShape 
  width={200} 
  height={200} 
  color="#2DBA98" 
  className="my-custom-class"
/>`}
        </pre>
      </div>
    </div>
  )
}

export default TeardropShapeDemo

