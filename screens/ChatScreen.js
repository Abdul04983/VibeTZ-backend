import { Image } from "react-native";
renderItem={({ item }) => {
  const time = new Date(item.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const isMe = item.senderId === user._id;

  return (
    <View style={{
      flexDirection: "row",
      justifyContent: isMe ? "flex-end" : "flex-start",
      alignItems: "flex-end",
      marginVertical: 4,
    }}>
      {!isMe && (
        <Image
          source={{ uri: item.senderAvatar || "https://i.pravatar.cc/40" }}
          style={{ width: 30, height: 30, borderRadius: 15, marginRight: 5 }}
        />
      )}

      <View style={{
        backgroundColor: isMe ? "#DCF8C6" : "#EEE",
        padding: 10,
        borderRadius: 8,
        maxWidth: "75%",
      }}>
        <Text>{item.content}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 4 }}>
          <Text style={{ fontSize: 10, color: "#555" }}>{time}</Text>
          {isMe && (
            <Text style={{ fontSize: 10, color: item.read ? "blue" : "gray", marginLeft: 10 }}>
              {item.read ? "Read" : "Sent"}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}}
<Text style={{ fontSize: 10, color: 'gray' }}>
  {new Date(item.createdAt).toLocaleTimeString()}
</Text>
