export function money(bb) {
    if (bb <= 0) {
        return 'starved';
    } else if (bb <= 10) {
        return 'bobBelcherPoor';
    }
    return 'mrFischoederRich';
}