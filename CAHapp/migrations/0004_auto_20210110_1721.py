# Generated by Django 3.1.4 on 2021-01-11 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CAHapp', '0003_auto_20210110_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='createdAt',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
