/**
 *
 * Created by Administrator on 2016/10/24.
 */
module.exports = {
    checkWaivers: function(req, res, next){
        var cart = req.session.cart;
        if(!cart) return next();
        if(cart.items.some(function(item){ return item.product.requiresWaiver; })){
            if(!cart.warnings) cart.warnings = [];
            cart.warnings.push('One or more of your selected tours requires a waiver.');
        }
        next();
    },

    checkGuestCounts:function (req, res, next) {
        var cart=req.session.cart;
        if(!cart) return next();
        if(cart.items.some(function (item) {
                return item.guests > item.product.maximumGuests;
            })){
            if(!cart.error) cart.error=[];
            cart.errors.push('One or more of your selected tours cannot accommodate the '+
                'number of guests you have selected.');
        }
        next();
    }



};