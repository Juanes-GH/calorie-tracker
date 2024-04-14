import { categories } from "../data/categories"

export default function Form() {
  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categorias:</label>
            <select
                className="border border-slate-300 p-2 rounded-xl w-full bg-white"
                id="category"
            >
                {categories.map(category => (
                    <option 
                        key={category.id}
                        value={category.name}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">Actividad:</label>
            <input 
                id="activity"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, Jugo de Naranja, Ensalda, Ejercicio, Pesas, Bicicleta"
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias:</label>
            <input 
                id="calories"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. 300kls o 500"
            />
        </div>

        <input 
            className="bg-gray-600 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            type="submit"
            value="Guardar Comida o Guardar Ejercicios"
        />

    </form>
  )
}
