import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

// Dữ liệu mẫu
const DATA = [
  {
    id: "1",
    type: "task",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    desc: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00",
  },
  {
    id: "2",
    type: "customer",
    title: "Bạn có khách hàng mới!",
    desc: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "3",
    type: "share_dup",
    title: "Khách hàng được chia sẻ bị trùng",
    desc: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "4",
    type: "add_dup",
    title: "Khách hàng được thêm bị trùng",
    desc: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "5",
    type: "task",
    title: "Công việc sắp đến hạn trong hôm nay",
    desc: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "6",
    type: "task",
    title: "Công việc đã quá hạn",
    desc: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    time: "20/08/2020, 06:00",
  },
];

// Icon “fake” bằng Text để khỏi cần cài thư viện icon
function LeftIcon({ type }) {
  const isTask = type === "task";
  return (
    <View style={[styles.iconWrap, isTask ? styles.iconTask : styles.iconUser]}>
      <Text style={styles.iconText}>{isTask ? "✓" : "👥"}</Text>
    </View>
  );
}

function Item({ item }) {
  return (
    <View style={styles.item}>
      <LeftIcon type={item.type} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          {item.desc}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  listContent: { padding: 12 },

  item: {
    flexDirection: "row",
    backgroundColor: "#f3f6ff",
    padding: 12,
    borderRadius: 12,
    alignItems: "flex-start",
  },

  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  iconTask: { backgroundColor: "#3b5bbb" },
  iconUser: { backgroundColor: "#e9eefc" },

  iconText: { fontSize: 18, color: "#fff", fontWeight: "800" },

  content: { flex: 1 },

  title: { fontSize: 14, fontWeight: "700", color: "#1f2a44" },
  desc: { marginTop: 3, fontSize: 12.5, color: "#3b4663" },
  time: { marginTop: 6, fontSize: 11.5, color: "#6c7aa6" },

  separator: { height: 10 },
});