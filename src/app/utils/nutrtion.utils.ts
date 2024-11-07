import { User } from "../interfaces/user";

export function calcularTMB(user: User): number {
    const { weight, height, age, gender } = user;
    let tmb: number;

    // Fórmula de Mifflin-St Joer para TMB
    if (gender === "masculino") {
        tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Estimar el TDEE usando un factor de actividad de 1.375 (ligeramente activo)
    const tdee = tmb * 1.375;

    user.caloriesNeeded = tdee; // Guardar el TDEE en el objeto de usuario
    return tdee; // Devuelve el TDEE
}
