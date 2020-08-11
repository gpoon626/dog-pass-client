#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comments"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "comment": {
      "content": "'"${CONTENT}"'",
      "user": "'"${USER_ID}"'",
      "postId":"'"${POST_ID}"'"
    }
  }'

echo
