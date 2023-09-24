FROM public.ecr.aws/lambda/python:3.7
RUN mkdir -p flaskapp
COPY . flaskapp
COPY requirements.txt  .
RUN pip3 install -r requirements.txt --target flaskapp

CMD ["app.handler"]