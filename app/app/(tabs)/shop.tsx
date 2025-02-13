import { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    Pressable,
} from "react-native";

export default function Index() {
    const apiurl = "https://fakestoreapi.com/products?limit=6";

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
    fetch(apiurl)
        .then((response) => response.json())
        .then((data) => {
        setProducts(data);
        });
    }, []);

  // Affiche un produit sélectionné dans un modal
    const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    };

  // Ferme le modal
    const handleCloseModal = () => {
    setSelectedProduct(null);
    };

    const ProductCard = ({ product }) => (
    <TouchableOpacity
        style={styles.card}
        onPress={() => handleSelectProduct(product)}
    >
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={1}>
        {product.title}
        </Text>
        <Text style={styles.price}>{product.price}€</Text>
    </TouchableOpacity>
    );

    return (
    <View style={styles.container}>
        <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        />

      {/* Modal pour afficher le produit en grand */}
        <Modal
        visible={selectedProduct !== null}
        transparent={true}
        animationType="slide"
        >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            {selectedProduct && (
                <>
                <Image
                    source={{ uri: selectedProduct.image }}
                    style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                <Text style={styles.modalPrice}>
                    {selectedProduct.price}€
                </Text>
                <Pressable
                    style={styles.closeButton}
                    onPress={handleCloseModal}
                >
                    <Text style={styles.closeButtonText}>Fermer</Text>
                </Pressable>
                </>
            )}
            </View>
        </View>
        </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingTop: 20,
    },
    card: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    },
    image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    },
    title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    },
    price: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
    },
    modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    },
    modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    },
    modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    },
    modalPrice: {
    fontSize: 20,
    color: "#333",
    marginBottom: 15,
    },
    closeButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    },
    closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    },
});
