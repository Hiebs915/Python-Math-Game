# Generated by Django 3.1.2 on 2020-12-09 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0009_auto_20201120_1827'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='question_status',
            field=models.CharField(default='unknown', max_length=10),
        ),
    ]
