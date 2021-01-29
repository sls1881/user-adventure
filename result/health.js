export function health(aph) {
    if (aph <= 0) {
        return 'heartAttack';
    } else if (aph <= 30) {
        return 'moderateHealth';
    }
    return 'greatHealthy';
}