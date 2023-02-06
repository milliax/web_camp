# web_camp

## 新增到GIT中

```bash=
git add .
```

## commit 

```bash=
git commit -m "新增的COMMIT"
```
-m 參數後面接的是 Commit 的名子

## remote config

```bash
git remote add origin git@github.com:使用者名稱/儲存櫃.git
```
如果不能 new 的話
先刪除原本的 origin 再重新add
```
git remote rm origin
```

## push

```
git push ""origin"" <Branch名稱>
```