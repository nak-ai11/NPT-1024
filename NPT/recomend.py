# Pythonでの例（Surpriseライブラリを使用）
from surprise import Dataset, Reader# type: ignore
from surprise import KNNBasic# type: ignore
from surprise.model_selection import train_test_split # type: ignore
from surprise import accuracy # type: ignore

# データセットの読み込み
data = Dataset.load_from_file('ratings.csv', reader=Reader(rating_scale=(1, 5)))
trainset, testset = train_test_split(data, test_size=0.2)

# モデルの訓練
model = KNNBasic()
model.fit(trainset)

# 評価
predictions = model.test(testset)
print("RMSE:", accuracy.rmse(predictions))

# 商品のレコメンデーション
item_id = 'アイテムAのID'
top_n = model.get_neighbors(item_id, k=5)
print("おすすめ商品:", top_n)
