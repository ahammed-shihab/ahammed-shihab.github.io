import json
import sys

log_file = sys.argv[1]
output_file = sys.argv[2]

last_user_message = ""
with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line.strip())
            if data.get('type') == 'USER_INPUT':
                last_user_message = data.get('content', '')
        except Exception:
            pass

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(last_user_message)
