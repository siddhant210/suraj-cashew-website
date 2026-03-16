import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "../context/CartContext";
import { CreditCard, MapPin, User } from "lucide-react";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: value,
    }));
  };

  const generateOrderId = () => {
    return "SC" + Date.now().toString().slice(-8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    try {
      const orderData = {
        orderId: newOrderId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        paymentMethod: formData.paymentMethod,
        items: items,
        total: getTotalPrice(),
      };

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/order`,
        orderData
      );

      const message = `
New Order Received!

Order ID: ${newOrderId}

Customer: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}

Address:
${formData.address}
${formData.city}, ${formData.state} - ${formData.pincode}

Total: ₹${getTotalPrice()}
`;

      const whatsappNumber = "918291061982";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");

      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    }
  };

  if (items.length === 0 && !orderPlaced) {
    navigate("/cart");
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Order Confirmed!
          </h1>

          <p className="mb-4">Thank you for your order.</p>

          <div className="bg-gray-100 p-4 rounded mb-6">
            <p className="text-sm">Order ID</p>
            <p className="text-xl font-bold">{orderId}</p>
          </div>

          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT SIDE FORM */}
            <div className="lg:col-span-2 space-y-6">

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />

                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <Input
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />

                </CardContent>
              </Card>


              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Shipping Address</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                  <Textarea
                    name="address"
                    placeholder="Full Address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />

                  <div className="grid grid-cols-3 gap-4">
                    <Input
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                    />

                    <Input
                      name="state"
                      placeholder="State"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                    />

                    <Input
                      name="pincode"
                      placeholder="Pincode"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                    />
                  </div>

                </CardContent>
              </Card>


              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>

                <CardContent>

                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={handlePaymentMethodChange}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">Cash on Delivery</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gpay" id="gpay" />
                      <Label htmlFor="gpay">
                        Google Pay (8291061982)
                      </Label>
                    </div>
                  </RadioGroup>

                </CardContent>
              </Card>

            </div>

            {/* ORDER SUMMARY */}
            <div>
              <Card className="sticky top-24">

                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-600">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <span>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>
                        ₹{getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                  >
                    Place Order
                  </Button>

                </CardContent>
              </Card>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;