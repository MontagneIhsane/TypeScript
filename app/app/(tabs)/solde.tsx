import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";

export default function Sale() {
    const apiurl = "https://fakestoreapi.com/products/1"; 

    const [product, setProduct] = useState(null);
    const [discount, setDiscount] = useState(20); 

    useEffect(() => {
    fetch(apiurl)
        .then((response) => response.json())
        .then((data) => {
        setProduct(data);
        });
    }, []);


    const getDiscountedPrice = (price) => {
    return (price - (price * discount) / 100).toFixed(2);
    };

    if (!product) {
    return (
        <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007bff" />
        </View>
    );
    }

    return (
    <View style={styles.container}>
        <Text style={styles.header}>Promotion spéciale !</Text>

        <View style={styles.card}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>{product.price}€</Text>
            <Text style={styles.newPrice}>
            {getDiscountedPrice(product.price)}€
            </Text>
        </View>

        <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>-{discount}%</Text>
        </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
    },
    header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#e74c3c",
    },
    card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  oldPrice: {
    fontSize: 18,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  newPrice: {
    fontSize: 22,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  badgeContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#e74c3c",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
