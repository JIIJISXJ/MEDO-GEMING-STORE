function orderProduct(productName) {
    // ضع رقم هاتفك مع كود الدولة بدون "+" أو "00"
    const phoneNumber = "201108302815"; 
    
    const message = encodeURIComponent(`مرحباً Medo Gaming Store، أريد طلب شحن: ${productName}`);
    const whatsappUrl = `https://wa.me/${+201108302815}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}
