# Documentation

<a id="home"></a>

---

# Jump To:

1. [Register](#register)
1. [Login](#login)
1. [Update Account](#updateAccount)
1. [Delete Account](#deleteAccount)
1. [Register Book By File](#uploadFile)
1. [Register Book By Url](#uploadUrl)
1. [Register Question](#registerQuestion)
1. [Get Book List](#getBookList)
1. [Get Error List](#getErrorList)
1. [Get Query List](#getQueryList)
1. [Paraphrase](#paraphrase)
1. [Summarize](#summarize)
1. [Text Improvement](#textImprovement)

---

## <a id="register">Register</a>

[Home](#home)

### URL

<code>"/account/register"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Data Params

<pre><code>
  Body : {
   username : String,
   name: String,
   password : String
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content: {
    "statusCode": 201,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNGU2ZDhmMjgtOTE4YS00MTM0LWI5NDItMWIwN2VmNTQ2ZjViIiwidXNlcm5hbWUiOiJ2ZWRhcmEiLCJpc3MiOiJJU1MiLCJhdWQiOiJBVUQiLCJpYXQiOjE2OTIzNTA5NzB9.FFDvHQDrHe1TLaroV0YDUbtU52NSMrbu-Q14mHjp0mE"
    }
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Username Already Exist",
    "error": "Bad Request"
}
</code>
</pre>

Notes:
token is jwt

---

## <a id="login">Login</a>

[Home](#home)

### URL

<code>"/account/login"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Data Params

<pre><code>
  Body : {
   username : String,
   password : String
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content: {
    "statusCode": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZTVkMTAyMjItMWEyZS00ZTRiLWFjMTMtY2FiZTA1OGI1OTQ2IiwidXNlcm5hbWUiOiJiYWdocmFtIiwiaXNzIjoiSVNTIiwiYXVkIjoiQVVEIiwiaWF0IjoxNjkyMzY1NzQ5fQ.0bfQs0BDJvGTW-uErn8t3rq0rC9wt-k4eZjRnadYdmk"
    }
}</code></pre>

### Error Response:

<pre>
<code>Code: 401 Unauthorized

Content: {
    "statusCode": 401,
    "message": "Invalid Credentials",
    "error": "Unauthorized"
}
</code>
</pre>

Notes:
token is jwt

---

## <a id="updateAccount">Update Account</a>

[Home](#home)

### URL

<code>"/account/update"</code>

### Method:

<b>PATCH</b>

### URL Params

Required:

Optional:

### Security

Required: Bearer Tokens

### Data Params

<pre><code>
  Body : {
   uuid : String,
   oldPassword : String
   newPassword: String
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content: {
    "statusCode": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZTVkMTAyMjItMWEyZS00ZTRiLWFjMTMtY2FiZTA1OGI1OTQ2IiwidXNlcm5hbWUiOiJiYWdocmFtIiwiaXNzIjoiSVNTIiwiYXVkIjoiQVVEIiwiaWF0IjoxNjkyMzY1NzQ5fQ.0bfQs0BDJvGTW-uErn8t3rq0rC9wt-k4eZjRnadYdmk"
    }
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Invalid Account",
    "error": "Bad Request"
}
</code>
</pre>

Notes: Update Pass only

---

## <a id="deleteAccount">Delete Account</a>

[Home](#home)

### URL

<code>"/account/delete"</code>

### Method:

<b>DELETE</b>

### URL Params

Required:

Optional:

### Security

Required: Bearer Tokens

### Data Params

<pre><code>
  Body : {
   uuid : String,
   oldPassword : String
   newPassword: String
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content: {
    "statusCode": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZTVkMTAyMjItMWEyZS00ZTRiLWFjMTMtY2FiZTA1OGI1OTQ2IiwidXNlcm5hbWUiOiJiYWdocmFtIiwiaXNzIjoiSVNTIiwiYXVkIjoiQVVEIiwiaWF0IjoxNjkyMzY1NzQ5fQ.0bfQs0BDJvGTW-uErn8t3rq0rC9wt-k4eZjRnadYdmk"
    }
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Invalid Account",
    "error": "Bad Request"
}
</code>
</pre>

Notes:

---

## <a id="uploadFile">Register Book By File</a>

[Home](#home)

### URL

<code>"/book/upload/file"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Security

Required: Bearer Tokens

### Data Params

<pre><code>
FormData
  Body : {
   file : File,
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content: {
    "statusCode": 200,
    "data": {
        "sourceId": "src_Bf907RZ8JT6MEHe72WhOY"
    }   
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Could not read PDF",
    "error": "Bad Request"
}
</code>
</pre>

Notes: File only accept PDF

---

## <a id="uploadUrl">Register Book By Url</a>

[Home](#home)

### URL

<code>"/book/upload/url"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Security

Required: Bearer Tokens

### Data Params

<pre><code>
  Body : {
   url : string,
   title: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content: {
    "statusCode": 200,
    "data": {
        "sourceId": "src_Bf907RZ8JT6MEHe72WhOY"
    }   
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Could not read PDF",
    "error": "Bad Request"
}
</code>
</pre>

Notes: Only Url that show direct pdf is accepted e.g. (www.xxx.com/data1.pdf)

---

## <a id="registerQuestion">Register Question</a>

[Home](#home)

### URL

<code>"/book/question"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Security

Required: Bearer Tokens

### Data Params

<pre><code>
  Body : {
   src : string,
   messages: string
   referenceSources: boolean(optional)
   queryUuid: string(optional for update query)
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": {
        "content": "Regarding your question, \"Peerless Beauty\" is a term used to describe a lonely existence (beauty) that is unparalleled in the world. It is derived from a passage in a Chinese book. The passage continues to say that when the person looks over one side, a castle goes to ruin, and when they look over the other side, a country goes to ruin. If the young lady in the story continues to grow like this, the country might even start fighting for her and go into ruins. [P48]",
        "references": [
            {
                "pageNumber": 48
            }
        ],
        "queryUuid": "aca19309-b834-4b8e-b6d3-61855eaca4e3"
    }
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Source with ID src_FFuMUo0sGa67uCD7NKl2 does not exist",
    "error": "Bad Request"
}
</code>
</pre>

Notes: Not all pdf support referenceSources

---

## <a id="getBookList">Get Book List</a>

[Home](#home)

### URL

<code>"/book"</code>

### Method:

<b>GET</b>

### URL Params

Required:

Optional:

### Security

Required: Bearer Tokens

### Data Params

<pre><code>
  Query : {
   skip: string
   limit: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": [
        {
            "_id": "64f437cee915b4cf0817d600",
            "title": "e-goverment",
            "src": "src_bQjxHCymUtnSIl6VotTTV",
            "userUuid": "e5d10222-1a2e-4e4b-ac13-cabe058b5946",
            "created_at": "2023-09-03T07:37:50.821Z",
            "updated_at": "2023-09-03T07:37:50.821Z"
        }
    ]
}</code></pre>

### Error Response:

<pre>
<code>Code: 401 Unauthorized

Content: {
    "statusCode": 401,
    "message": "Unauthorized"
}
</code>
</pre>

Notes: cannot use skip without limit & vice versa

---

## <a id="getErrorList">Get Error List</a>

[Home](#home)

### URL

<code>"/book/error"</code>

### Method:

<b>GET</b>

### URL Params

Required:

Optional:

### Security

### Data Params

<pre><code>
  Query : {
   skip: string
   limit: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": [
        {
            "_id": "64df27611dad9e6a1c64005b",
            "message": "{\"message\":\"Could not read PDF\",\"code\":\"BAD_REQUEST\"}",
            "route": "/book/upload/url",
            "data": "{\"url\":\"https://fanstranslations.com/novel/kuma-kuma-kuma-bear/chapter-566/\",\"title\":\"kuma kuma bear 566\"}",
            "created_at": "2023-08-18T08:10:09.878Z",
            "updated_at": "2023-08-18T08:10:09.878Z"
        }
    ]
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Cannot use skip without limit",
    "error": "Bad Request"
}
</code>
</pre>

Notes: cannot use skip without limit & vice versa

---

## <a id="getQueryList">Get Query List</a>

[Home](#home)

### URL

<code>"/book/query"</code>

### Method:

<b>GET</b>

### URL Params

Required:

Optional:

### Security

### Data Params

<pre><code>
  Query : {
   bookRef: string
   skip: string
   limit: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": [
        {
            "_id": "64df825a98ee1ffef436913d",
            "uuid": "a17ac39e-af81-4225-9004-9cebd9ce4916",
            "userUuid": "",
            "bookRef": "src_mTBMChEwEhLXjTQN6NGpg",
            "messages": "[{\"role\":\"user\",\"content\":\"apa isi pasal 14\"}]",
            "referenceSources": true,
            "result": "{\"content\":\"Pasal 14 dalam file ini menjelaskan bahwa lembaga penerima pembayaran yang ditunjuk oleh Direktorat Jenderal melakukan verifikasi terhadap pembayaran biaya Legalisasi sebagaimana dimaksud dalam Pasal 13 ayat (3). [P7]\",\"references\":[{\"pageNumber\":7}]}",
            "created_at": "2023-08-18T14:38:18.987Z",
            "updated_at": "2023-08-18T14:38:18.987Z"
        }
    ]
}</code></pre>

### Error Response:

<pre>
<code>Code: 401 Bad Request

Content: {
    "statusCode": 400,
    "message": "Cannot use skip without limit",
    "error": "Bad Request"
}
</code>
</pre>

Notes: cannot use skip without limit & vice versa

---

## <a id="paraphrase">Paraphrase</a>

[Home](#home)

### URL

<code>"/book/paraphrase"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Security

Bearer Token

### Data Params

<pre><code>
  Body : {
   uuidQuery: string
   query: string
   style: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": [
        {
            "text": "It is derived from a passage in a Chinese book that describes a lonely existence (beauty) that is unparalleled in the world. As the passage goes on, the person looks over one side and sees a castle go to ruin, while looking over the other side, he sees a country go to ruin. As the young lady grows, the country could even go into ruin if they fight for her."
        },
        {
            "text": "Regarding your question, \"Peerless Beauty\" describes a lonely existence (beauty) that is unparalleled anywhere in the world. This expression is derived from a Chinese passage. A castle goes to ruin when the person looks over one side, and a country goes to ruin when the person looks over the other. The country might even begin to fight for the young lady in the story if she continues to grow like this."
        },
        {
            "text": "Regarding your question, \\\"Peerless Beauty\\\" is a concept used to describe a lonely existence (beauty) that is unparalleled in the world. Continually, the passage says that when a person looks over one side, a castle crumbles, while looking over the other, a country crumbles. As she grows in this way, the country might even start fighting for her, resulting in ruin."
        },
        {
            "text": "/\"Peerless Beauty/\" refers to a lonely existence (beauty) unmatched in the world. It originates from a passage in a Chinese book. It states that a castle falls apart when someone looks over one side, while a country falls apart when someone looks over the other side. The country might start fighting for her if the young lady keeps growing like this."
        },
        {
            "text": "In response to your question, \"Peerless Beauty\" describes a lonely existence (beauty) that is unparalleled. According to the passage, a castle goes to ruin when the person looks from one side, and a country goes to ruin from the other side. As the young lady grows, the country might fight for her and end up in ruin if this continues."
        },
        {
            "text": "As to your question, \"Peerless Beauty\" describes a lonely existence (beauty) unmatched in the world. It's derived from a Chinese passage. According to the passage, when a person looks one way, a castle will come to ruin, and when they look the other way, a country will come to ruin. In the future, the country might even start fighting over her as she grows."
        },
        {
            "text": "As a result of a passage in a Chinese book, \"peerless beauty\" describes a lonely existence (beauty) that is unparalleled. A castle can go to ruin if someone looks over one side, and a country can go to ruin if they look over the other side. As a result of the young lady's rapid growth in the story, the country may even start fighting for her."
        },
        {
            "text": "I use \"Peerless Beauty\" as a way to describe a lonely existence (beauty) that is unique to the world. It is derived from a passage in a Chinese book. It is further stated that when a person looks over one side, a castle goes to ruin, while when they look over the other side, a country goes to ruin. In the future, the country might even start fighting for the young lady and collapse."
        },
        {
            "text": "In reference to your question, /\"Peerless Beauty/\" is used to describe a lonely existence that is unparalleled. According to the passage, a castle goes to ruin when you look over one side, and a country goes to ruin when you look over the other side. It's possible for the country to start fighting over the young lady and collapse if she continues to grow this way."
        },
        {
            "text": "The term Peerless Beauty describes a lonely existence (beauty) that is unrivaled around the globe. Taking its inspiration from a Chinese passage, the passage states that a castle ruins when someone looks over one side, and a country ruins when they look over the other side. The country might even start fighting for her if the young lady in the story continues to grow like this."
        }
    ]
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Query Does Not Exist",
    "error": "Bad Request"
}
</code>
</pre>

Notes: style enum general, casual, formal, short

---

## <a id="summarize">Summarize</a>

[Home](#home)

### URL

<code>"/book/summarize"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Security

Bearer Token

### Data Params

<pre><code>
  Body : {
   uuidQuery: string
   query: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": [
        {
            "text": "Ai scolds Junichi, Kaoru, and Masayoshi for causing a ruckus in the library, and later offers to teach Ai mathematics. Junichi unintentionally offends Ai when he and Miya talk about Sae's breasts, and later humiliates himself in front of Ai and the swimming team."
        }
    ]
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Query Does Not Exist",
    "error": "Bad Request"
}
</code>
</pre>

Notes: type enum

---

## <a id="textImprovement">Text Improvement</a>

[Home](#home)

### URL

<code>"/book/text"</code>

### Method:

<b>POST</b>

### URL Params

Required:

Optional:

### Security

Bearer Token

### Data Params

<pre><code>
  Body : {
   uuidQuery: string
   query: string
   intent: string
  }</code></pre>

### Success Response:

<pre><code>Code: 200 OK
Content:{
    "statusCode": 200,
    "data": {
        "id": "54332484-c79b-e32a-918d-6bd6afb8f9ca",
        "suggestions": [
            {
                "text": "Here's how to clean your room. Start by moving all items that don't have a place in the room to the center. Remove at least five things you haven't used in a year. Put all trash in the trash, and dirty dishes in the sink"
            },
            {
                "text": "First, move everything to the center of the room that doesn't belong there. Get rid of five items you haven't used in the last year. Clean your kitchen sink with all the dirty dishes. Take out all trash."
            },
            {
                "text": "First, move all items that don't have a proper place to the center of the room, then get rid of five items you haven't used in a year. Take all of the garbage out and put all of the dirty dishes in the sink."
            },
            {
                "text": "Clean your room the right way. Put all the things that don't belong in the center of the room and get rid of at least five things you haven't used in a year. Throw out the trash, and wash dirty dishes"
            },
            {
                "text": "For an easy room cleaning, follow these steps. Get rid of five items you haven't used in the last year, move everything that doesn't have a proper place to the center of the room. Put the trash in the trash can, and wash your dishes in the sink."
            },
            {
                "text": "Here's how to clean your room. Move the items that do not belong to your room and move them to the center. Get rid of at least five items that you haven't used in the last year. Put all of the trash in the garbage and dirty dishes in the sink."
            },
            {
                "text": "Organize your room in the following way. Start by moving everything that doesn't have a home. Get rid of at least five things you haven't used in a year. Put out all the trash and dirty dishes in the kitchen sink."
            },
            {
                "text": "You can clean your room perfectly by following this system. To begin, place all items that don't belong in the center of the room. Get rid of at least five things that haven't been used in the last year. Put out trash, and clean up dirty dishes"
            },
            {
                "text": "Here's how to clean your room right. First, arrange all the items in the room in the center. Get rid of at least five items you haven't used for at least one year. Take out all of the trash, and wash the dirty dishes."
            },
            {
                "text": "Clean your room by moving all of the items that don't belong in its proper place to the center. Delete at least five items that you haven't used in a year. Clean the kitchen sink, and throw out all of the trash."
            }
        ]
    }
}</code></pre>

### Error Response:

<pre>
<code>Code: 400 Bad Request

Content: {
    "statusCode": 400,
    "message": "Query Does Not Exist",
    "error": "Bad Request"
}
</code>
</pre>

Notes: intent enum general, casual, formal, short

---
