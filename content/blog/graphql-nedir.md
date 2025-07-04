---
title: "GraphQL Nedir?"
date: 2025-06-20
summary: "GraphQL, API sorgulama dili ve sunucu tarafı çalışma zamanı olarak modern uygulamalarda veri çekmeyi nasıl kolaylaştırır?"
---

## 🔍 GraphQL Nedir?

GraphQL, Facebook tarafından geliştirilen bir **API sorgulama dilidir**. REST'e alternatif olarak geliştirilen bu sistem, istemcilerin **ihtiyaç duydukları verileri tam olarak** almasına olanak tanır.

## 🚀 Neden GraphQL?

- 📦 Fazla veri taşımayı önler (Over-fetching).
- 🧩 Eksik veri sorununu çözer (Under-fetching).
- 🔄 Tek endpoint'ten çok farklı veri sorguları yapılabilir.
- 🔧 Geliştiricilere daha fazla kontrol sağlar.

## 🔨 Nasıl Kullanılır?

GraphQL ile bir API’ye sorgu yapmak, şu şekilde çalışır:

```graphql
query {
  user(id: "1") {
    name
    email
    posts {
      title
    }
  }
}
```
