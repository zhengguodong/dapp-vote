export const initWeb3=async() => {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
        } catch (error) {
            console.error("User denied account access")
        }
    }
}
