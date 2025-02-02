
import whisper
print(9)
model = whisper.load_model("turbo")
result = model.transcribe("/private/var/folders/gd/w0ds7ccx1yb2gv7lmcyw0nrr0000gn/T/com.apple.VoiceMemos/.com.apple.uikit.itemprovider.temporary.tv7ZOX/Woodside Ave.m4a")
print(result["text"])
